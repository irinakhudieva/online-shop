import React, { useCallback, useContext, useState } from 'react';
import TeaList from '../components/tea-list/TeaList';
import styles from '../components/tea-list/TeaList.module.css';
import Categories from '../components/categories/Categories';
import Sort from '../components/sort/Sort';
import { useGetTeaQuery } from '../store/api/api';
import Pagination from '../components/pagination/Pagination';
import { SearchContext } from '../providers/SearchProvider';


const CatalogTea = () => {
    const [categoryIndex, setCategoryIndex] = useState(0);
    const [sortType, setSortType] = useState({
        name: 'популярности', 
        sortProperty: 'rating' 
    });
    const [limit, setLimit] = useState(4);
    const [page, setPage] = useState(1);

    const sort = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ?  'desc' : 'asc';
    const category = categoryIndex > 0 ? `?category=${categoryIndex}` : '?_category=0';
    
    const { searchValue } = useContext(SearchContext);

    const {data, isLoading, error} = useGetTeaQuery({
        category, 
        sort, 
        order,
        page,
        limit,
        searchValue
    });

    const totalPages = data?.length;

    const onChangeCategory = useCallback((i) => setCategoryIndex(i), [])
    

    const changePage = (page) => {
        setPage(page);
    }

    return (
        <div className={styles.catalog}>
            <h2>Каталог товаров</h2>
            <div className={styles.row}>
                <Categories 
                    category={categoryIndex} 
                    onClickCategory={onChangeCategory} 
                    changePage={changePage}
                />
                <div className={styles.column}>
                    <Sort 
                        sort={sortType} 
                        onChangeSort={(i) => setSortType(i)} 
                    />
                    <TeaList 
                        isLoading={isLoading} 
                        data={data}
                        error={error}
                    />
                    <Pagination  
                        page={page}
                        changePage={changePage}
                        totalPages={totalPages}
                    />
                </div>   
            </div>
        </div>
    )
}

export default CatalogTea;
