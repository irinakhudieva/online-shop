import React from 'react';
import styles from './CosmeticsList.module.css';
import CosmeticsItem from '../cosmetics-item/CosmeticsItem';
import Loader from '../Loader/Loader';

const CosmeticsList = ({isLoading, data}) => {

    if(isLoading) return <Loader />

    return (
        <div>
           <div className={styles.item}>
                {data ? (
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
