import React from 'react';
import styles from './CosmeticsItem.module.css';
import { useNavigate } from 'react-router-dom';
import FavoritesItem from './FavoritesItem';
import Price from './Price';

const CosmeticsItem = ({cosm}) => {
    const navigate = useNavigate();
    
    return (
        <div className={styles.item}>
            <FavoritesItem cosm={cosm} />
            <img src={cosm.image} alt="" />
            <p onClick={() => navigate(`/${cosm.id}`)}>{cosm.fullName}</p>
            <p className={styles.name}>{cosm.name}</p>
            <Price cosm={cosm} />
        </div>
  )
}

export default CosmeticsItem;
