import { create } from "zustand";
import type { cartSideBarState, UIState } from "../types/uiTypes";

export const useUiStore = create<UIState>((set) => ({
  isMobileNavOpen: false,
  toggleMobileNav: () =>
    set((state) => ({
      isMobileNavOpen: !state.isMobileNavOpen,
    })),
}));


export const useCartSideBarStore = create<cartSideBarState>((set) => ({
  isCartSideBarOpen: false,
  toggleCartSideBar: () =>
    set((state) => ({
      isCartSideBarOpen: !state.isCartSideBarOpen,
    })),
}));
