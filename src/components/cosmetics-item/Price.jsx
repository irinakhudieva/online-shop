import React from 'react';
import styles from './CosmeticsItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCart } from '../../store/cart/cart.slice';

const Price = ({cosm}) => {
    const dispatch = useDispatch();

    const { cart } = useSelector(selectCart);
    
    const isExists = cart.some(c => c.id === cosm.id);

    return (
        <div className={styles.price}>
            <h3>{new Intl.NumberFormat('ru', {
                    style: "currency",
                    currency: 'RUB',
                    minimumFractionDigits: 0
                }).format(cosm.price)}</h3>            
            {!isExists 
                ? <button 
                    className='button'
                    onClick={() => dispatch(addToCart(cosm))}
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
