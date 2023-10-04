import React from 'react';
import styles from './TeaItem.module.css';
import { useNavigate } from 'react-router-dom';
import FavoritesItem from './FavoritesItem';
import Price from './Price';

const TeaItem = ({tea}) => {
    const navigate = useNavigate();
    
    return (
        <div className={styles.item}>
            <FavoritesItem tea={tea} />
            <img src={tea.image} alt="" />
            <h2 onClick={() => navigate(`/${tea.id}`)}>{tea.name}</h2>
            <Price tea={tea} />
            
        </div>
  )
}

export default TeaItem;
