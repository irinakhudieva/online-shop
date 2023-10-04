import React from 'react';
import styles from './Pagination.module.css';
const Pagination = ({page, changePage, totalPages}) => {

    return (
        <div className={styles.pagination}>
            <button className='button' onClick={() => changePage(page - 1)} disabled={page <= 1}>Предыдущая</button>
            <button className='button' onClick={() => changePage(page + 1)} disabled={page >= totalPages}>Следующая</button>
        </div>
    )
}

export default Pagination;

