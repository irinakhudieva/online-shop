import React from 'react';
import styles from './CartItem.module.css';
import { CloseOutlined } from '@ant-design/icons';
import { removeItem } from '../../store/cart/cart.slice';
import { useDispatch } from 'react-redux';
import Weight from './Weight';
import { useNavigate } from 'react-router-dom';

const CartItem = ({tea, index}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id, image, name, price, weight }  = tea;
   
    return (
        <div className={styles.cartItem}>
            <div className={styles.title}>
                {index + 1}.
                <img className={styles.image} src={image} />
                <p onClick={() => navigate(`/${id}`)}>{name} </p>
            </div>
            <Weight tea={tea} />
            <div>
                {weight/50 * price} р.
                <CloseOutlined 
                    style={{marginLeft: 15}} 
                    onClick={() => dispatch(removeItem(id))} 
                />
            </div>    
        </div>
    )
}

export default CartItem;
