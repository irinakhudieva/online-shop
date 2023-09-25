import React from 'react';
import styles from '../components/tea-list/TeaList.module.css';
import { useFavorite } from '../hooks/useFavorites';
import TeaItem from '../components/tea-item/TeaItem';

const Favorites = () => {
    const favorites = useFavorite();

    return (
        <div className={styles.favorites}>
            <h1>Избранное</h1>
            <div className={styles.item}>
                {favorites.map(tea => 
                        <TeaItem key={tea.id} tea={tea} />
                )}
            </div>
            {!favorites.length && <p className={styles.favorites}>У вас нет выбранных товаров. Перейдите в каталог и подберите себе что-нибудь по вкусу.</p>}
        </div>
    )
}

export default Favorites;
