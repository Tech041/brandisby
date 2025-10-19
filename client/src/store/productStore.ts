import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../types/productTypes";

interface ProductState {
  products: Product[];
  allProducts: Product[];
  isLoading: boolean;
  fetchProducts: (tenant: string) => Promise<void>;
  sortProducts: (order: "asc" | "desc") => void;
  sortByCategory: (category: string) => void;
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
          category: "men",
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
          category: "women",
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
          category: "men",
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
          category: "child",
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
          category: "men",
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
          category: "men",
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
          category: "babies",
          tenant: "serac",
          date: 1716634345448,
        },
      ]);
    }, 1000);
  });

export const useProductStore = create<ProductState>()(
  persist(
    (set, get) => ({
      products: [],
      allProducts: [],
      isLoading: false,
      fetchProducts: async (tenant: string) => {
        set({ isLoading: true });
        const data = await mockApiCall();
        const filtered = data.filter((product) => product.tenant === tenant);
        set({ products: filtered, allProducts: filtered, isLoading: false });
      },
      // Sort products by price
      sortProducts: (order) => {
        const sorted = [...get().products].sort((a, b) =>
          order === "asc" ? a.price - b.price : b.price - a.price
        );
        set({ products: sorted });
      },
      // sort by category
      sortByCategory: (category) => {
        const { allProducts } = get();

        if (category === "all") {
          set({ products: allProducts });
        } else {
          const filtered = allProducts.filter(
            (p) => p.category.toLowerCase() === category.toLowerCase()
          );
          set({ products: filtered });
        }
      },
    }),
    {
      name: "product-storage",
    }
  )
);
