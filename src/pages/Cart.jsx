import React from 'react';
import styles from '../components/cart-item/CartItem.module.css';
import { useSelector } from 'react-redux';
import CartItem from '../components/cart-item/CartItem';
import { NavLink } from 'react-router-dom';
import { sumBy } from '../utils/common';

const Cart = () => {
    const { cart } = useSelector(state => state.cart);
 
    return (
        <div className={styles.cart}>
            <h1>Корзина</h1>
            {cart.length ? (
                <div>
                    {cart.map((tea, index) => 
                        <CartItem key={tea.id} tea={tea} index={index} />
                    )}
                    <div className={styles.total}>
                        <strong>Сумма заказа:  
                            {sumBy(cart.map(({ weight, price }) => price/50 * weight))} p. 
                        </strong>
                    </div> 
                    <NavLink to='/'><button className='button'>В каталог</button></NavLink>
                </div>
            ) : (
                <div className={styles.content}>
                <p>Ваша корзина пуста. Для того, чтобы выбрать товары, перейдите в каталог.</p>
                <NavLink to='/'><button className='button'>В каталог</button></NavLink>
            </div>
            )} 
        </div>
    )
}

export default Cart;
