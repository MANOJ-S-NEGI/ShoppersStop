export const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN : 'cart/SET_IS_CART_OPEN',
  SET_CART_ITEMS : 'cart/SET_CART_ITEMS',
}

const INITIAL_CART_STATE = {
  isCartOpen: false,
  cartItems: [],
}

export const cartReducer =  (  state = INITIAL_CART_STATE, action = {} ) => {
  const { type, payload } = action ;

  switch(type){
    case  CART_ACTION_TYPES.SET_CART_ITEMS:
    return {...state, cartItems : payload};

    case  CART_ACTION_TYPES.SET_IS_CART_OPEN:
    return {...state,  isCartOpen : payload};

    default :
    return state;
  } 
}