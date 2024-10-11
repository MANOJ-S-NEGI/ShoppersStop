import styled from 'styled-components';

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 1px solid rgb(3, 3, 51);
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 7;

  
`;
  
export const CardItemsDiv = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
