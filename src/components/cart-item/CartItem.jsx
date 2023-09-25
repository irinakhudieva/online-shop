import React, { useState } from 'react';
import styles from './CartItem.module.css';
import Price from '../tea-item/Price';
import { CloseOutlined } from '@ant-design/icons';
import { removeItem } from '../../store/cart/cart.slice';
import { useDispatch } from 'react-redux';

const CartItem = ({tea}) => {
    const [price, setPrice] = useState(tea.price);
    const [weight, setWeight] = useState(tea.weight)
    const dispatch = useDispatch();


    return (
        <div className={styles.cartItem}>
            {tea.name}
            <div>
                {tea.weight} гр.
            </div>
            <div>
                {tea.price} р.
                <CloseOutlined style={{marginLeft: 15}} onClick={() => dispatch(removeItem(tea.id))} />
            </div>
            
            {/* <Price tea={tea} /> */}
            
        </div>
    )
}

export default CartItem;
