import React from 'react';
import styles from './TeaItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cart/cart.slice';

const Price = ({tea}) => {
    const dispatch = useDispatch();

    const { cart } = useSelector(state => state.cart);
    
    const isExists = cart.some(t => t.id === tea.id);

    return (
        <div className={styles.price}>
            <h3>{tea.price} p. / <span> 50 гр.</span>
            </h3>            
            {!isExists 
                ? <button 
                    className='button'
                    onClick={() => dispatch(addToCart(tea))}
                  >
                    В корзину
                  </button>
                : <button
                      className='button-done'
                  >
                    В корзине
                  </button>

                }             
        </div>     
    )
}

export default Price;
