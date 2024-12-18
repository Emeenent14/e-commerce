export enum Action {
  FetchProductsStart = "products/fetchProductsStart",
  SetProductQuantity = "cart/setProductQuantity",
  DeleteProduct = "cart/deleteProduct",
  AddProduct = "cart/addProductToCart",
}

export interface Product {
  id: number;
  quantity?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ShoppingCartItem extends Product {
  quantity: number;
}

export interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
  cart: ShoppingCartItem[];
  cartAmount: number;
}

export interface ShoppingCartState {
  items: ShoppingCartItem[];
  total: number;
}
