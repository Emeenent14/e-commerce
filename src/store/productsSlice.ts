import { createSlice, createAction } from "@reduxjs/toolkit";
import calculateTotalPrice from "utils/calculateTotalPrice";
import { Action, Product, ProductsState } from "utils/storeTypes";

export const setProductQuantity = createAction<{
  productId: number;
  quantity: number;
}>(Action.SetProductQuantity);

export const deleteProduct = createAction<{
  productId: number;
}>(Action.DeleteProduct);

export const addProductToCart = createAction<{
  productId: number;
}>(Action.AddProduct);

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
  cart: [],
  cartAmount: 0,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    fetchProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    // update the product quantity, using id, and a specific 'quantity' value.
    builder.addCase(setProductQuantity, (state, action) => {
      const { productId, quantity } = action.payload;
      const item = state.cart.find((product) => product.id === productId);
      if (item) {
        item.quantity = quantity;

        state.cartAmount = calculateTotalPrice(state.cart);
      }
    });
    // remove the product by id
    builder.addCase(deleteProduct, (state, action) => {
      const { productId } = action.payload;
      state.cart = state.cart.filter((product) => product.id !== productId);
      state.cartAmount = calculateTotalPrice(state.cart);
    });

    builder.addCase(addProductToCart, (state, action) => {
      const { productId } = action.payload;

      const product = state.items.find(
        (product: Product) => product.id === productId
      );

      const isProductPresent = state.cart.find((cart) => cart.id === productId);
      if (product) {
        if (isProductPresent) {
          state.cart = state.cart?.map((product) =>
            product.id === productId
              ? { ...product, quantity: product.quantity + 1 }
              : product
          );
        } else {
          state.cart = [...state.cart, { ...product, quantity: 1 }];
        }
        state.cartAmount = calculateTotalPrice(state.cart);
      }
    });
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} = productsSlice.actions;

export default productsSlice.reducer;
