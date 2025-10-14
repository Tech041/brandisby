
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../types/productTypes";

interface ProductState {
  products: Product[];
  isLoading: boolean;
  fetchProducts: (tenant: string) => Promise<void>;
}

const mockApiCall = (): Promise<Product[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          _id: "aaaaa",
          name: "Women Round Neck Cotton Top",
          description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
          price: 150,
          image: "/images/image1.jpeg",
          category: "Women",
          tenant: "fleurdevie",
          date: 1716634345448,
        },
        {
          _id: "aaabb",
          name: "Women  Cotton Top",
          description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
          price: 600,
          image: "/images/image2.jpeg",
          category: "Women",
          tenant: "serac",
          date: 1716634345448,
        },
        {
          _id: "aaacc",
          name: "Women Round Neck Cotton Top",
          description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
          price: 300,
          image: "/images/image3.jpeg",
          category: "Women",
          tenant: "fleurdevie",
          date: 1716634345448,
        },
        {
          _id: "aaadd",
          name: "Men Round Top",
          description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
          price: 1000,
          image: "/images/image4.jpeg",
          category: "Women",
          tenant: "fleurdevie",
          date: 1716634345448,
        },
        {
          _id: "aaaff",
          name: "Men Round Neck Cotton Top",
          description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
          price: 1050,
          image: "/images/image5.jpeg",
          category: "Women",
          tenant: "fleurdevie",
          date: 1716634345448,
        },
        {
          _id: "aaagg",
          name: "WomenCotton Top",
          description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
          price: 1100,
          image: "/images/image6.jpeg",
          category: "Women",
          tenant: "serac",
          date: 1716634345448,
        },
        {
          _id: "aaahh",
          name: "Men Round Neck",
          description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
          price: 1400,
          image: "/images/product.jpeg",
          category: "Women",
          tenant: "serac",
          date: 1716634345448,
        },
      ]);
    }, 1000);
  });

export const useProductStore = create<ProductState>()(
  persist(
    (set) => ({
      products: [],
      isLoading: false,
      fetchProducts: async (tenant: string) => {
        set({ isLoading: true });
        const data = await mockApiCall();
        const filtered = data.filter((product) => product.tenant === tenant);
        set({ products: filtered, isLoading: false });
      },
    }),
    {
      name: "product-storage",
    }
  )
);
