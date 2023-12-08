import React, { useCallback, useContext, useState } from 'react';
import СosmeticsList from '../components/сosmetics-list/СosmeticsList';
import styles from '../components/сosmetics-list/CosmeticsList.module.css';
import Categories from '../components/categories/Categories';
import Sort from '../components/sort/Sort';
import { SearchContext } from '../providers/SearchProvider';
import { useGetCosmeticsQuery } from '../store/api/api';


const CatalogСosmetics = () => {
    const [categoryIndex, setCategoryIndex] = useState(0);
    const [sortType, setSortType] = useState({
        name: 'популярности', 
        sortProperty: 'rating' 
    });

    const sort = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ?  'desc' : 'asc';
    const category = categoryIndex > 0 ? `?category=${categoryIndex}` : '?_category=0';
    
    const { searchValue } = useContext(SearchContext);
 
    const { data, isLoading}  = useGetCosmeticsQuery({
        category, 
        sort, 
        order,
        searchValue
    });

    const onChangeCategory = useCallback((i) => setCategoryIndex(i), [])

    return (
        <div className={styles.catalog}>
            <h2>Каталог товаров</h2>
            <div className={styles.row}>
                <Categories 
                    category={categoryIndex} 
                    onClickCategory={onChangeCategory} 
                />
                <div className={styles.column}>
                    {data && (
                        <Sort 
                            sort={sortType} 
                            onChangeSort={(i) => setSortType(i)} 
                        />  
                    )}
                    <СosmeticsList 
                        isLoading={isLoading} 
                        data={data}
                    />
                </div>   
            </div>
        </div>
    )
}

export default CatalogСosmetics;
