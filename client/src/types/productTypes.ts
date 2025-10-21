export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tenant: string;
  quantity: number;
  discount: number;
  isStock: boolean;
  date: number;
}
