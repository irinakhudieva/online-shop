import React, { useState } from 'react';
import styles from './CosmeticsDetails.module.css';
import { MinusOutlined, PlusOutlined  } from '@ant-design/icons';
import FavoritesItem from '../cosmetics-item/FavoritesItem';
import { NavLink } from 'react-router-dom';
import Price from '../cosmetics-item/Price';

const CosmeticsDetails = ({cosm}) => {
    const [isShow, setIsShow] = useState(false);
    const [isShow2, setIsShow2] = useState(false);
    
    
    return (
        <div className={styles.description}>
            <div className={styles.image}> 
                <NavLink to='/online-shop'><button className='button'>В каталог</button></NavLink>
                <img src={cosm.image} alt='Фото чая' />
            </div>
            <div className={styles.descriptionItem}>
                <FavoritesItem cosm={cosm} />
                <h1>{cosm.fullName}</h1>
                <p>{cosm.name}</p>
                <Price cosm={cosm} />
                <div className={styles.text}> 
                    <div className={styles.details}>
                        <strong>Описание: </strong>
                        {!isShow ? <PlusOutlined onClick={() => setIsShow(true)} /> : <MinusOutlined onClick={() => setIsShow(false)} />}
                    </div>
                    {isShow ? <p>{cosm.description}</p> : null}
                </div>
                <div className={styles.text}>
                    <div className={styles.details}>
                        <strong>Способ приготовления: </strong>
                        {!isShow2 ? <PlusOutlined onClick={() => setIsShow2(true)} /> : <MinusOutlined onClick={() => setIsShow2(false)} />}
                    </div>
                    {isShow2 ? <p>{cosm.method}</p> : null}
                </div>
            </div>
        </div>
  )
}

export default CosmeticsDetails;
