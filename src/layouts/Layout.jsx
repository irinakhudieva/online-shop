import React from 'react';
import styles from './Layout.module.css';
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    
    return (
        <div className={styles.wrapper}>
            <Header /> 
            <div className={styles.content}>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;

