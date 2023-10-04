import React from 'react';
import styles from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { addToCart, itemMinus } from '../../store/cart/cart.slice';

const Weight = ({tea}) => {
    const dispatch = useDispatch();
   
    const { id, weight } = tea;

    return (
        <div className={styles.weigthBlock}>
            <button 
                className={styles.button}
                onClick={() =>
                    dispatch(itemMinus(id))
                }
                disabled={weight <= 50}
            >
                    -
            </button> 
                {weight } гр.
            <button 
                className={styles.button}
                onClick={() =>
                    dispatch(addToCart({ ...tea, weight }))
                }
            >
                +
            </button> 
        </div>
    )
}

export default Weight;

