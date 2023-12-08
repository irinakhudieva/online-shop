import React from 'react';
import styles from './CartItem.module.css';
import { CloseOutlined } from '@ant-design/icons';
import { addToCart, itemMinus, removeItem } from '../../store/cart/cart.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CartItem = ({cosm, index}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id, image, name, fullName, count, price }  = cosm;
   
    return (
        <div className={styles.cartItem}>
            <div className={styles.title}>
                {index + 1}.
                <img className={styles.image} src={image} />
                <div>
                   <h4 onClick={() => navigate(`/${id}`)}>{fullName}</h4>
                    <p>{name}</p> 
                </div>
            </div>
            <div className={styles.countBlock}>
                <button 
                    className={styles.button}
                    onClick={() =>
                        dispatch(itemMinus(id))
                    }
                    disabled={count <= 1}
                >
                    -
                </button> 
                    { count }
                <button 
                    className={styles.button}
                    onClick={() =>
                        dispatch(addToCart({ ...cosm, count }))
                    }
                >
                    +
                </button> 
            </div>
            <div className={styles.price}>
                {count * price} p.
                <CloseOutlined onClick={() => dispatch(removeItem(id))} />
            </div>    
        </div>
    )
}

export default CartItem;
