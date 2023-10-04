import React from 'react';
import styles from '../components/tea-list/TeaList.module.css';
import TeaItem from '../components/tea-item/TeaItem';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Favorites = () => {
    const favorites = useSelector(state => state.favorites);

    return (
        <div className={styles.favorites}>
            <h1>Избранное</h1>
            <div className={styles.item}>
                {favorites.map(tea => 
                        <TeaItem key={tea.id} tea={tea} />
                )}
            </div>
            
            {!favorites.length && 
            <div className={styles.content}>
                <p>У вас нет выбранных товаров. Перейдите в каталог и подберите себе что-нибудь по вкусу.</p>
            </div>}
            <NavLink to='/'><button className='button'>В каталог</button></NavLink>
        </div>
    )
}

export default Favorites;
