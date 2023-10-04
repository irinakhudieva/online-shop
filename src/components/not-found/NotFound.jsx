import React from 'react';
import styles from './NotFound.module.css';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
        <h1>Ошибка 404!</h1>
        <p>Запрашиваемая вами страница не найдена, возможно, неправильно указан адрес.</p>
        <NavLink to='/'><button className='button'>В каталог</button></NavLink>
    </div>
  )
}

export default NotFound;
