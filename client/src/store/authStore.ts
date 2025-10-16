import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  userId: string;
  name: string;
  email: string;
  role: string;
  tenant: string | null;
};

type AuthState = {
  user: User | null;
  message: string | null;
  setUser: (user: User) => void;
  setMessage: (message: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      message: null,
      setUser: (user) => set({ user }),
      setMessage: (message) => set({ message }),
      logout: () => set({ user: null, message: null }),
    }),
    {
      name: "auth-storage",
    }
  )
);
