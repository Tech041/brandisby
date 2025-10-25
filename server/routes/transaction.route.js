import { Router } from "express";
import { confirmPayment } from "../controllers/transaction.controller.js";

const transactionRouter = Router();
transactionRouter.post("/verify-payment", confirmPayment);
export default transactionRouter;
