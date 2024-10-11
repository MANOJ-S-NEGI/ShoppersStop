import Button from "../button/button.jsx";

import { CartDropDownContainer, CardItemsDiv, EmptyMessage } from "./cart-dropdown.styles.jsx";
import CartItem from "../cart-item/cart-item.components.jsx";

import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux-store/cart/cart.selector';



const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  //console.log("cardItems")
  //console.log()
  
  
  function goToCheckoutHandler(){
    navigate("/checkout")
  }

  return(
    <CartDropDownContainer>
      <CardItemsDiv>
        {(cartItems.length > 0) ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CardItemsDiv>
      <Button onClick={goToCheckoutHandler}>CheckOut</Button>
    </CartDropDownContainer>
  );
}
export default CartDropDown;
