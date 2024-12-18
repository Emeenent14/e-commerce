import { useState } from "react";
import { useSelector } from "react-redux";
import ProductItemCart from "./ProductItem";
import { selectCart, selectCartAmount } from "store/selectors";
import * as S from "./Cart.styles";

const Cart = () => {
  const cart = useSelector(selectCart);
  const cartAmount = useSelector(selectCartAmount);

  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {expanded && cart.length ? (
        <S.CloseCartContainer onClick={() => setExpanded(false)} />
      ) : null}

      <S.CartContainer
        expanded={expanded}
        arial-label={`cart  of ${cart.length} products`}
      >
        {expanded &&
          cart.map((product) => (
            <ProductItemCart
              key={product.id}
              title={product.title}
              price={product.price * product.quantity}
              id={product.id}
              image={product.image}
              quantity={product.quantity}
            />
          ))}

        <S.TotalCartCost onClick={() => setExpanded(true)}>
          <span>Items {cart.length} </span>
          &nbsp;
          {cart.length ? <span>${cartAmount}</span> : null}
        </S.TotalCartCost>
      </S.CartContainer>
    </>
  );
};

export default Cart;
