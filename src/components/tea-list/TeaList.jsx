import React from 'react';
import styles from './TeaList.module.css';
import TeaItem from '../tea-item/TeaItem';
import { LoadingOutlined } from '@ant-design/icons';

const TeaList = ({isLoading, data}) => {

    return (
        <div className={styles.item}>
            {isLoading ? (
                <div className={styles.loading}><LoadingOutlined /></div>
            ) : data ? (
                data.map(tea => 
                <TeaItem 
                    key={tea.id}
                    tea={tea} />)
            ) : (
                <div>Произошла ошибка, попробуйте позже.</div>
            )}
            
        </div>
    );
}

export default TeaList;
