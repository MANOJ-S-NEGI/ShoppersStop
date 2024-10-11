import CheckoutItem from '../../components/checkout-item/checkout-items.components';
import { useSelector } from 'react-redux';

import { CheckOutContainer, CheckOutHeader, Total, HeaderBlock, CheckOutSpan, StyledBreak } from './checkout.styles.jsx';
import {   selectCartItems,   selectCartTotal, } from '../../redux-store/cart/cart.selector.js';

import PaymentForm  from '../../components/payment-form/payment-form.components.jsx';


const Checkout = () => {

  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <CheckOutContainer>
      <CheckOutHeader>
        <HeaderBlock>
          <CheckOutSpan>Product</CheckOutSpan>
        </HeaderBlock>
        <HeaderBlock>
          <CheckOutSpan>Desc</CheckOutSpan>
        </HeaderBlock>
        <HeaderBlock>
          <CheckOutSpan>Quantity</CheckOutSpan>
        </HeaderBlock>
        <HeaderBlock>
          <CheckOutSpan>Price ($)</CheckOutSpan>
        </HeaderBlock>
        <HeaderBlock>
          <CheckOutSpan>Remove</CheckOutSpan>
        </HeaderBlock>
      </CheckOutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>TOTAL: ${cartTotal}</Total>
      <StyledBreak/>
      <StyledBreak/>

      <PaymentForm />
    </CheckOutContainer>
  );
};

export default Checkout;
