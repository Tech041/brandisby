import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Product } from "../types/productTypes";
import type { CartItem } from "../types/cartTypes";

interface CartState {
  cart: Record<string, CartItem>;
  tenant: string | null;
  setTenant: (tenant: string) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (_id: string) => void;
  updateQuantity: (_id: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: {},
      tenant: null,
      setTenant: (newTenant) => {
        const { tenant, cart } = get();

        // If switching tenants and cart is not empty, clear cart
        if (tenant && tenant !== newTenant && Object.keys(cart).length > 0) {
          set({ cart: {}, tenant: newTenant });
        } else {
          set({ tenant: newTenant });
        }
      },

      addToCart: (product) => {
        const { tenant, cart } = get();
        if (tenant && tenant !== product.tenant) {
          set({ cart: {}, tenant: product.tenant });
        }

        const existing = cart[product._id];
        const updatedCart = {
          ...cart,
          [product._id]: {
            ...product,
            quantity: existing ? existing.quantity + 1 : 1,
          },
        };

        set({ cart: updatedCart, tenant: tenant ?? product.tenant });
      },

      removeFromCart: (_id) => {
        const { cart } = get();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [_id]: removed, ...rest } = cart;
        const newTenant = Object.keys(rest).length === 0 ? null : get().tenant;
        set({ cart: rest, tenant: newTenant });
      },

      updateQuantity: (_id, quantity) => {
        if (quantity < 1) return;
        const { cart } = get();
        if (!cart[_id]) return;

        set({
          cart: {
            ...cart,
            [_id]: { ...cart[_id], quantity },
          },
        });
      },

      clearCart: () => set({ cart: {}, tenant: null }),
    }),
    {
      name: "cart-storage",
    }
  )
);
