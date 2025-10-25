import axios from "axios";
import Order from "../models/order.model.js";
import Transaction from "../models/transaction.model.js";

export const confirmPayment = async (req, res, next) => {
  const { reference, cart, shippingForm, tenant, message, userId, total } =
    req.body;

  // Basic field presence check
  if (!reference || !cart || !shippingForm || !tenant) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields: reference, cart, shippingForm, tenant",
    });
  }

  // Validate cart structure
  const items = Object.values(cart || {});
  if (items.length === 0) {
    return res.status(400).json({ success: false, message: "Cart is empty" });
  }

  for (const item of items) {
    if (
      !item.name ||
      typeof item.price !== "number" ||
      typeof item.quantity !== "number"
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid cart item structure" });
    }
  }

  // Validate shipping form
  const { name, email, address, country, city, state } = shippingForm;
  if (!name || !email || !address || !country || !city || !state) {
    return res
      .status(400)
      .json({ success: false, message: "Incomplete shipping details" });
  }

  try {
    // Step 1: Verify with Paystack
    const paystackRes = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    const data = paystackRes.data?.data;
    console.log("Paystack response ", data);
    if (!data || data.status !== "success") {
      return res
        .status(400)
        .json({ success: false, message: "Payment not successful" });
    }

    // Step 2: Validate total
    const calculatedTotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // Normalize both totals to fixed decimals
    const normalizedFrontendTotal = Number(Number(total).toFixed(2));
    const normalizedBackendTotal = Number(calculatedTotal.toFixed(2));

    

    if (normalizedFrontendTotal !== normalizedBackendTotal) {
      return res
        .status(400)
        .json({ success: false, message: "Total mismatch" });
    }

    // Step 3: Validate Paystack amount
    if (data.amount !== calculatedTotal * 100) {
      return res
        .status(400)
        .json({ success: false, message: "Amount mismatch with Paystack" });
    }

    // Step 4: Create Order
    const order = new Order({
      reference: data.reference,
      items,
      shippingForm,
      tenant,
      message,
      userId,
      total: calculatedTotal,
      status: "paid",
    });

    await order.save();

    // Step 5: Create Transaction Record
    const transaction = new Transaction({
      reference: data.reference,
      status: data.status,
      amount: data.amount / 100,
      message: data.gateway_response,
      paid_by: userId,
      orderId: order._id,
      email: data.customer.email,
      name: data.customer.name,
      tenant,
    });

    await transaction.save();

    // Step 6: Respond with success
    return res.json({
      success: true,
      transactionId: transaction._id,
      orderId: order._id,
    });
  } catch (err) {
    console.error(
      "Payment confirmation error:",
      err.response?.data || err.message
    );
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
