import { create } from "zustand";
import { persist } from "zustand/middleware";
import apiRequest from "../utils/apiRequest";

type Tenant = {
  brand: string;
  logo: string;
  phone: number;
  business_address: string;
  country: string;
  about: string;
  tenant_name: string;
};

type TenantState = {
  tenant: Tenant | null;
  tenants: string[];
  message: string | null;
  loading: boolean;
  error: string | null;

  setTenant: (tenant: Tenant) => void;
  setMessage: (message: string) => void;
  clearTenant: () => void;
  fetchTenants: () => Promise<void>;
};

export const useTenantStore = create<TenantState>()(
  persist(
    (set) => ({
      tenant: null,
      tenants: [],
      message: null,
      loading: false,
      error: null,

      setTenant: (tenant) => set({ tenant }),
      setMessage: (message) => set({ message }),
      clearTenant: () => set({ tenant: null, message: null }),

      fetchTenants: async () => {
        set({ loading: true, error: null });
        try {
          const res = await apiRequest.get("/tenants");
          set({ tenants: res.data.tenants, loading: false });
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
          set({
            error: err.message || "Failed to fetch tenants",
            loading: false,
          });
        }
      },
    }),
    {
      name: "tenant-storage",
    }
  )
);
