import { call, put, takeEvery } from "redux-saga/effects";
import { API_URL } from "utils/config";
import { Action } from "utils/storeTypes";
import { fetchProductsFailure, fetchProductsSuccess } from "./productsSlice";

function* workGetProductsFetch(): Generator<any, any, any> {
  try {
    const response = yield call(fetch, API_URL);

    if (response.ok) {
      const products = yield response.json();
      yield put(fetchProductsSuccess(products));
    } else {
      yield put(fetchProductsFailure("Failed to get products."));
    }
  } catch (error) {
    yield put(
      fetchProductsFailure(
        "Failed to get products. Please check your network connection."
      )
    );
  }
}

export function* productsSaga(): Generator {
  yield takeEvery(Action.FetchProductsStart, workGetProductsFetch);
}

export default productsSaga;
