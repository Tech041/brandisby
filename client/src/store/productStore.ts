import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../types/productTypes";
import apiRequest from "../utils/apiRequest";

interface ProductState {
  products: Product[];
  allProducts: Product[];
  isLoading: boolean;
  error: null;
  setProducts: (products: Product[]) => void;
  addProduct: (product: Product) => void;
  sortProducts: (order: "asc" | "desc") => void;
  sortByCategory: (category: string) => void;
  fetchProducts: (tenant: string) => Promise<void>;
}

export const useProductStore = create<ProductState>()(
  persist(
    (set, get) => ({
      products: [],
      allProducts: [],
      isLoading: false,
      error: null,
      setProducts: (products) => {
        set({ products, allProducts: products });
      },

      addProduct: (product) => {
        const { products, allProducts } = get();
        set({
          products: [product, ...products],
          allProducts: [product, ...allProducts],
        });
      },
      fetchProducts: async (tenant) => {
        set({ isLoading: true, error: null });
        try {
          const res = await apiRequest.get("/products", {
            headers: {
              "x-tenant": tenant,
            },
          });

          const fetched = res.data.allProducts || [];

          set({
            products: fetched,
            allProducts: fetched,
            isLoading: false,
          });
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
          set({
            error: err.message || "Failed to fetch products",
            isLoading: false,
          });
        }
      },

      // Sort by price
      sortProducts: (order) => {
        const sorted = [...get().products].sort((a, b) =>
          order === "asc" ? a.price - b.price : b.price - a.price
        );
        set({ products: sorted });
      },

      // Filter by category
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
