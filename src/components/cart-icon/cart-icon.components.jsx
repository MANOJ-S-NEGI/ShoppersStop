import { useDispatch, useSelector } from 'react-redux';

import { selectCartCount, selectIsCartOpen, } from '../../redux-store/cart/cart.selector';
import { setIsCartOpen } from '../../redux-store/cart/cart.action';

import {CartIconContainer, ItemCount } from  "./cart-icon.styles.jsx";
import { ReactComponent as CartIcon } from "../../assets/shopping-bag.svg";


const ShoppingCart = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  

  const isToggleOpen = () =>
     dispatch(setIsCartOpen(!isCartOpen));

  return(
    <CartIconContainer onClick={ isToggleOpen }>
      <CartIcon  className= "shopping-icon" />

      <ItemCount> { cartCount } </ ItemCount>
    </CartIconContainer>
  );
}

export default ShoppingCart;