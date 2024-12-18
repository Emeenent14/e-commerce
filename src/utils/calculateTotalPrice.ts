import { ShoppingCartItem } from "./storeTypes";

const calculateTotalPrice = (cart: ShoppingCartItem[]) => {
  const totalPrice = cart
    .map((item) => item.quantity * item.price)
    .reduce((total, price) => total + price, 0);

  return Number(totalPrice.toFixed(2));
};

export default calculateTotalPrice;
