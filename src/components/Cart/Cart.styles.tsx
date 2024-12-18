import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import { COLORS } from "utils/colors";

interface ExpandedProp {
  expanded: boolean;
}

export const CartContainer = styled.div<ExpandedProp>`
  position: fixed;
  top: 50px;
  right: 0;
  max-height: 500px;
  overflow: scroll;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.border};
  border-radius: 5px 0 0 5px;
  display: flex;
  width: ${(props) => (props.expanded ? "width: 500px;" : "")};
  flex-direction: column;
  transition: width 0.5s;
`;

export const CloseCart = styled(AiFillCloseCircle)`
  font-size: 25px;
  position: absolute;
  top: -5px;
`;

export const CartItemContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px;
  border-bottom: 1px solid ${COLORS.black};

  &:last-child {
    border: none;
  }
`;

export const CartItemDetails = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
`;

export const CartItemImage = styled.img`
  width: 100%;
  max-width: 100px;
  object-fit: scale-down;
`;

export const CartItemTitle = styled.span`
  font-weight: bold;
  font-size: 21px;
  max-width: 300px;
`;

export const CartItemPrice = styled.span`
  padding: 5px;
`;
export const TotalCartCost = styled.div`
  padding: 5px 8px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  & > span {
    text-transform: uppercase;
  }
`;

export const CloseButton = styled.div``;

export const QuantityInput = styled.input`
  display: inline-block;
  font-size: 16px;
  padding: 5px;
  border: 1px solid ${COLORS.grey};
  border-radius: 5px;
  max-width: 50px;
  text-align: center;
  margin-left: 5px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${COLORS.secondary};
    border-color: ${COLORS.primary};
  }
`;

export const CloseCartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.overlay};
  border: none;
  outline: none;
  cursor: pointer;
`;

export const RemoveButton = styled.button``;
