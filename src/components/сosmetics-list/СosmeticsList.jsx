import React from 'react';
import styles from './CosmeticsList.module.css';
import CosmeticsItem from '../cosmetics-item/CosmeticsItem';
import { LoadingOutlined } from '@ant-design/icons';

const CosmeticsList = ({isLoading, data}) => {

    return (
        <div className={styles.cometicsList}>
           <div className={styles.item}>
                {isLoading ? (
                    <div className={styles.loading}><LoadingOutlined /></div>
                ) : data ? (
                    data?.map(cosm => 
                    <CosmeticsItem 
                        key={cosm.id}
                        cosm={cosm} />)
                ) : (
                    <div className={styles.error}>Произошла ошибка, попробуйте позже.</div>
                )}
            </div> 
        </div>
        
    );
}

export default CosmeticsList;
