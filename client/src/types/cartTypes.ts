// types/CartTypes.ts
import type { Product } from "../types/productTypes";

export interface CartItem extends Product {
  quantity: number;
}
