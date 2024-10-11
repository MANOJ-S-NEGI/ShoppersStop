import Button from '../../components/button/button';
import './product-card.styles.scss';
import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../redux-store/cart/cart.selector';
import { addItemToCart } from '../../redux-store/cart/cart.action';


const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
  
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  
  return (
        <div className="card">
            
            <img src={imageUrl} alt={`${name}`} className="card-img-top" />
            <div className="card-body">            
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>                
                <Button buttonType='inverted' onClick={addProductToCart}>
                    Add to cart
                </Button>

            </div>
        </div>     
  );
};

export default ProductCard;



/**
 * <div className="product-container">
          {filterChange.map((product) => {
              const { id, name, imageUrl, price } = product;
              const addProductToCart = () => addItemToCart(product);
              return(
                  <div className="card" key={id}>
                      <img src={imageUrl} className="card-img-top" alt="product_img" />
                      <Button buttonType="inverted" onClick={addProductToCart}>Addd To Cart</Button>

                      <div className="card-body">
                          <h4>{name}</h4>
                          <p>${price}</p>
                      </div>
                  </div>
              );             
          })}
      </div>
 * 
 * 
 * 
 * 
 * 
 * 
 */