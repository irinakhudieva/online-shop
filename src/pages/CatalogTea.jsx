import React, { useEffect, useMemo, useState } from 'react';
import TeaList from '../components/tea-list/TeaList';
import styles from '../components/tea-list/TeaList.module.css';
import Categories from '../components/categories/Categories';
import Sort from '../components/sort/Sort';
import { useGetTeaQuery } from '../store/api/api';
// import { Pagination } from 'antd';
import Pagination from '../components/pagination/Pagination';
import { getPageCount } from '../utils/pages';


const CatalogTea = () => {
    const [data2, setData] = useState([])
    const [categoryIndex, setCategoryIndex] = useState(0);
    const [sortType, setSortType] = useState({
        name: 'популярности', 
        sortProperty: 'rating' 
    });
    const [limit, setLimit] = useState(5);
    
    const [page, setPage] = useState(1);

    const sort = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ?  'desc' : 'asc';
    const category = categoryIndex > 0 ? `?category=${categoryIndex}` : '?_category=0';
    
    
    const {data, isLoading} = useGetTeaQuery({
        category, 
        sort, 
        order,
        page,
        limit
    });
  
    // const totalCount = data?.response;
    // console.log(totalCount)

    // const totalPages = getPageCount(totalCount, limit);
    // // useEffect(() => {
    //     if(data) {
    //     setData(data);
    //   };
    // }, [data, page])
      

    // console.log(data?.length)

    // useEffect(() => {
    //     setTotalPages(getPageCount(totalCount, limit)) 
    // }, [limit, totalCount])
   

    const changePage = (page) => {
        setPage(page);
    }

    return (
        <div className={styles.catalog}>
            <h2>Каталог товаров</h2>
            <div className={styles.row}>
                <Categories 
                    category={categoryIndex} 
                    onClickCategory={(i) => setCategoryIndex(i)} 
                />
                <div className={styles.column}>
                    <Sort 
                        sort={sortType} 
                        onChangeSort={(i) => setSortType(i)} 
                    />
                    <TeaList 
                        isLoading={isLoading} 
                        data={data}
                    />
                    {/* <Pagination simple defaultPageSize={5} pageSize={3} defaultCurrent={1} total={data?.length} onChange={changePage}/> */}
                    <Pagination  
                        page={page}
                        changePage={changePage}
                        // totalPages={totalPages}
                    />
                </div>   
            </div>
        </div>
    )
}

export default CatalogTea;
