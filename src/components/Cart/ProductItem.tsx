import React from "react";
import { useDispatch } from "react-redux";
import { setProductQuantity, deleteProduct } from "store/productsSlice";
import formatPrice from "utils/formatPrice";

import { ProductItemCartProps } from "./types";
import * as S from "./Cart.styles";

const ProductItemCart = ({
  title,
  price,
  image,
  quantity,
  id,
}: ProductItemCartProps) => {
  const dispatch = useDispatch();
  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(event.target.value);
    dispatch(setProductQuantity({ productId: id, quantity: newQuantity }));
  };

  const handleProductDelate = () => {
    dispatch(deleteProduct({ productId: id }));
  };

  return (
    <S.CartItemContainer>
      <S.CartItemImage src={image} alt={`product image of ${title}`} />
      <S.CartItemDetails>
        <S.CartItemTitle>{title}</S.CartItemTitle>
        <S.CartItemPrice>{formatPrice(price)}</S.CartItemPrice>
        <S.CartItemPrice>
          Quantity:
          <S.QuantityInput
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </S.CartItemPrice>
        <S.RemoveButton
          onClick={handleProductDelate}
          aria-label={`Remove ${title} from cart`}
        >
          Remove
        </S.RemoveButton>
      </S.CartItemDetails>
    </S.CartItemContainer>
  );
};

export default ProductItemCart;
