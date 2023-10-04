import React from 'react';
import styles from './Header.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { Badge  } from 'antd';
import Search from './Search/Search';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const favorites = useSelector(state => state.favorites);
    const { cart } = useSelector(state => state.cart);
   
    
    return (
        <header className={styles.header}>
            <h2>LOGO</h2>
            {location.pathname !== '/cart' &&
                <div className={styles.goods}>  
                    <Search />
                    <Badge count={favorites.length}>
                        <HeartOutlined onClick={() => navigate('/favorites')} style={{ fontSize: '22px'}} />
                    </Badge>
                    <Badge count={cart.length}>
                        <ShoppingCartOutlined onClick={() => navigate('/cart')} style={{ fontSize: '25px'}} />
                    </Badge> 
                </div>
            }
        </header>
    )
}

export default Header;
