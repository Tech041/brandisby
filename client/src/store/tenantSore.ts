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
  tenantLoading: boolean;
  tenantsLoading: boolean;
  error: string | null;

  setTenant: (tenant: Tenant) => void;
  setMessage: (message: string) => void;
  clearTenant: () => void;
  fetchTenants: () => Promise<void>;
  resolveTenantFromSlug: (slug: string) => Promise<boolean>;
};

export const useTenantStore = create<TenantState>()(
  persist(
    (set) => ({
      tenant: null,
      tenants: [],
      message: null,
      tenantLoading: false,
      tenantsLoading: false,
      error: null,

      setTenant: (tenant) => set({ tenant }),
      setMessage: (message) => set({ message }),
      clearTenant: () => set({ tenant: null, message: null }),

      fetchTenants: async () => {
        set({ tenantsLoading: true, error: null });
        try {
          const res = await apiRequest.get("/tenants");
          set({ tenants: res.data.tenants, tenantsLoading: false });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
          set({
            error: err.message || "Failed to fetch tenants",
            tenantsLoading: false,
          });
        }
      },

      resolveTenantFromSlug: async (slug: string): Promise<boolean> => {
        set({ tenantLoading: true, error: null });
        try {
          const res = await apiRequest.get(`/tenants/${slug}`);
          const tenant = res.data.tenant;

          if (!tenant) {
            set({ tenant: null, tenantLoading: false });
            return false;
          }

          set({ tenant, tenantLoading: false });
          return true;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
          set({
            tenant: null,
            error: err.message || "Tenant not found",
            tenantLoading: false,
          });
          return false;
        }
      },
    }),
    {
      name: "tenant-storage",
    }
  )
);
