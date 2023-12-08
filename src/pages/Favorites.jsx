import React from 'react';
import styles from '../components/сosmetics-list/CosmeticsList.module.css';
import CosmeticsItem from '../components/cosmetics-item/CosmeticsItem';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../store/favorites/favorites.slice';

const Favorites = () => {
    const favorites = useSelector(selectFavorites);

    return (
        <div className={styles.favorites}>
            <h1>Избранное</h1>
                {favorites.length ? (
                    <div className={styles.item}>
                        {favorites.map(cosm => 
                            <CosmeticsItem key={cosm.id} cosm ={cosm} />
                        )}   
                    </div>
                ) : (
                    <div className={styles.content}>
                        <p>У вас нет выбранных товаров. Перейдите в каталог и подберите себе что-нибудь по вкусу.</p>
                        <NavLink to='/'><button className='button'>В каталог</button></NavLink> 
                    </div>
                )}   
                {!!favorites.length && <NavLink to='/'><button className='button'>В каталог</button></NavLink>}
        </div>
    )
}

export default Favorites;
