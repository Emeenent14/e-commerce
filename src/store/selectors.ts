import { RootState } from "./store";

export const selectAllProducts = (state: RootState) => state.products;
export const selectLoading = (state: RootState) => state.products.loading;
export const selectCart = (state: RootState) => state.products.cart;
export const selectCartAmount = (state: RootState) => state.products.cartAmount;
