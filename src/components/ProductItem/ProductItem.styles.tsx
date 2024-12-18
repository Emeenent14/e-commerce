import styled from "styled-components";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { COLORS } from "utils/colors";

export const ShoppingCart = styled(HiOutlineShoppingCart)`
  width: 50px;
  height: auto;
  color: ${COLORS.white};
`;

export const ProductCartBackground = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${COLORS.productBackground};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddProductDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > span {
    font-weight: bold;
    font-size: 21px;
    color: ${COLORS.white};
  }
`;

export const ProductItemContainer = styled.div`
  width: 22%;
  flex-grow: 1;
  padding: 20px;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.productBorder};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: space-between;
  &:hover {
    box-shadow: 0 0 10px ${COLORS.boxShadow};
    border: 1px solid ${COLORS.boxShadow};
    cursor: pointer;

    & > ${ProductCartBackground} {
      opacity: 1;
    }
  }

  @media (max-width: 950px) {
    width: 45%;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
  align-items: center;
`;

export const ProductTitle = styled.span`
  width: 250px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const ProductPrice = styled.span`
  background-color: ${COLORS.grey};
  padding: 20px;
`;

export const ProductImage = styled.img`
  width: 100%;
  max-width: 150px;
  padding: 20px;
`;
