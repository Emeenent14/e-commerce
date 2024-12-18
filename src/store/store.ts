import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import productReducer from "./productsSlice";

import productsSaga from "./productsSage";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { products: productReducer },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(productsSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
