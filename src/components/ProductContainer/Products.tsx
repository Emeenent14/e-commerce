import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchProductsStart } from "store/productsSlice";

import ProductItem from "../ProductItem/ProductItem";
import { ProductsContainer } from "./ProductContainer.styles";
import { selectAllProducts } from "store/selectors";

const Products = () => {
  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, [dispatch]);

  return (
    <ProductsContainer aria-label="List of products">
      {products.items.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          aria-label="product"
        />
      ))}
    </ProductsContainer>
  );
};

export default Products;
