import styled from "styled-components"

export const CartIconContainer = styled.div`
  width: 45px;
  height: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  //background-color: aqua;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight:normal;
  bottom: 28px;
`;
