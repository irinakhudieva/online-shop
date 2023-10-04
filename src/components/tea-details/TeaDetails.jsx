import React, { useState } from 'react';
import styles from './TeaDetails.module.css';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import FavoritesItem from '../tea-item/FavoritesItem';
import { NavLink } from 'react-router-dom';
import Price from '../tea-item/Price';

const TeaDetails = ({tea}) => {
    
    const [isShow, setIsShow] = useState(false);
    const [isShow2, setIsShow2] = useState(false);
  
    return (
        <div className={styles.description}>
            
            <div className={styles.image}>
                <img src={tea.image} alt='Фото чая' />
                <NavLink to='/'><button className='button'>В каталог</button></NavLink>
            </div>
            <div>
                <FavoritesItem tea={tea} />
                <h1>{tea.name}</h1>
                <Price tea={tea} />
                <div className={styles.text}> 
                    <div className={styles.details}>
                        <strong>Описание: </strong>
                        {!isShow ? <PlusOutlined onClick={() => setIsShow(true)} /> : <MinusOutlined onClick={() => setIsShow(false)} />}
                    </div>
                    {isShow ? <p>{tea.description}</p> : null}
                </div>
                <div className={styles.text}>
                    <div className={styles.details}>
                        <strong>Способ приготовления: </strong>
                        {!isShow2 ? <PlusOutlined onClick={() => setIsShow2(true)} /> : <MinusOutlined onClick={() => setIsShow2(false)} />}
                    </div>
                    {isShow2 ? <p>{tea.method}</p> : null}
                </div>
            </div>
        </div>
  )
}

export default TeaDetails;
