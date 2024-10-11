import styled from "styled-components";


export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
    height: 77%;
  }
  
  @media (max-width: 390px) {
    img {
      width: 20%;
      height: 60%;
  }
`;

export const ItemDetail = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 10px;

  @media (max-width: 390px) {
  width: 90%; 
  margin: 10px auto; 
`;

export const SpanComponent = styled.span`
  font-size: 15px;

  @media (max-width: 390px) {
    font-size: 10px;
    width: 90%; 
    margin: 10px auto; 
`;
