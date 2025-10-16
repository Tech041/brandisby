import { create } from "zustand";
import { persist } from "zustand/middleware";

type Tenant = {
  brand: string;
  logo: string;
  phone: number;
  business_address: string;
  country: string;
  about: string;
};

type TenantState = {
  tenant: Tenant | null;
  message: string | null;
  setTenant: (tenant: Tenant) => void;
  setMessage: (message: string) => void;
  clearTenant: () => void;
};

export const useTenantStore = create<TenantState>()(
  persist(
    (set) => ({
      tenant: null,
      message: null,
      setTenant: (tenant) => set({ tenant }),
      setMessage: (message) => set({ message }),
      clearTenant: () => set({ tenant: null, message: null }),
    }),
    {
      name: "tenant-storage",
    }
  )
);
