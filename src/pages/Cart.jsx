import React, { useEffect, useState } from 'react';
import styles from '../components/cart-item/CartItem.module.css';
import { useSelector } from 'react-redux';
import CartItem from '../components/cart-item/CartItem';

const Cart = () => {
    
    const [total, setTotal] = useState(0);

    let cart = useSelector(state => state.cart);

    return (
        <div className={styles.cart}>
            <h2>Корзина</h2>
            {cart.map(tea => 
                <CartItem key={tea.id} tea={tea} />
            )}
            <div><strong>Итого: {total} </strong></div>

            

        <button className='button'>оформить</button>
            
        </div>
    )
}

export default Cart;
