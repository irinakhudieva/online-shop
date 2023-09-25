import React, { useState } from 'react';
import styles from './Header.module.css';
import { useFavorite } from '../../hooks/useFavorites';
import { useNavigate } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { Input, Badge  } from 'antd';
import  { NavLink } from 'react-router-dom';
import { useGetTeaQuery } from '../../store/api/api';

const Header = () => {
    const navigate = useNavigate();
    const favorites = useFavorite();
    const cart = useSelector(state => state.cart)
    const { Search } = Input;
   

    const [searchTerm, setSearchTerm] = useState('');
    const [queryTerm, setQueryTerm] = useState('');

    const {data} = useGetTeaQuery(queryTerm);
const onSearch = (value) => setSearchTerm(value);

const handleSearch = () => {
    setQueryTerm(searchTerm);
}

    
    return (
        <header className={styles.header}>
            <h2>LOGO</h2>
            
            <div className={styles.goods}>
                <Search
                placeholder="Поиск по сайту..."
                allowClear
                onSearch={onSearch}
                style={{
                  width: 350,
                  activeBorderColor: '#000000',
                  hoverBorderColor: '#000000',
                  colorPrimaryHover: '#000000',
                  colorPrimary: '#000000'
                

                }}
                onClick={handleSearch}
            />
                <Badge count={favorites.length}>
                    <HeartOutlined onClick={() => navigate('/favorites')} style={{ fontSize: '22px'}} />
                </Badge>
                <Badge count={cart.length}>
                    <ShoppingCartOutlined onClick={() => navigate('/cart')} style={{ fontSize: '25px'}} />
                </Badge>
            </div>
        </header>
    )
}

export default Header;
