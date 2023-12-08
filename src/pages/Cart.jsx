import React from 'react';
import styles from '../components/cart-item/CartItem.module.css';
import { useSelector } from 'react-redux';
import CartItem from '../components/cart-item/CartItem';
import { NavLink } from 'react-router-dom';
import { sumBy } from '../utils/common';
import { selectCart } from '../store/cart/cart.slice';

const Cart = () => {
    const { cart } = useSelector(selectCart);
 
    return (
        <div className={styles.cart}>
            <h1>Корзина</h1>
            {cart.length ? (
                <div>
                    {cart.map((cosm, index) => 
                        <CartItem key={cosm.id} cosm={cosm} index={index} />
                    )}
                    <div className={styles.total}>
                        <strong>Сумма заказа: {sumBy(cart.map(({ count, price }) => price * count))} р.</strong>
                    </div> 
                    <NavLink to='/online-shop'><button className='button'>В каталог</button></NavLink>
                </div>
            ) : (
                <div className={styles.content}>
                    <p>Ваша корзина пуста. Для того, чтобы выбрать товары, перейдите в каталог.</p>
                    <NavLink to='/online-shop'><button className='button'>В каталог</button></NavLink>
                </div>
            )} 
        </div>
    )
}

export default Cart;
