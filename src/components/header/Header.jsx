import React from 'react';
import styles from './Header.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { Badge  } from 'antd';
import Search from './Search/Search';
import { selectFavorites } from '../../store/favorites/favorites.slice';
import { selectCart } from '../../store/cart/cart.slice';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const favorites = useSelector(selectFavorites);
    const { cart } = useSelector(selectCart);
   
    
    return (
        <header className={styles.header}>
            <h2>LOGO</h2>
            {location.pathname !== '/cart' &&
                <div className={styles.goods}>  
                    <Search />
                    <Badge count={favorites.length}>
                        <HeartOutlined onClick={() => navigate('/favorites')} style={{ fontSize: '23px'}} />
                    </Badge>
                    <Badge count={cart.length}>
                        <ShoppingCartOutlined onClick={() => navigate('/cart')} style={{ fontSize: '26px'}} />
                    </Badge> 
                </div>
            }
        </header>
    )
}

export default Header;
