import { CartItemContainer, SpanComponent, ItemDetail } from "./cart-item.styles.jsx";
import React from "react";
//import { useDispatch } from "react-redux"; 
//import { addCartItem } from '../../redux-store/cart/cart.action.js'



const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetail>
        <SpanComponent>
          {name}
        </SpanComponent>
        <SpanComponent>
          {quantity} x ${price}
        </SpanComponent>
      </ItemDetail>      
    </CartItemContainer>
  );
};

export default CartItem;