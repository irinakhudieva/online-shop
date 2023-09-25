import React, { useState } from 'react';
import styles from './Pagination.module.css';
import { getPageCount, getPagesArray } from '../../utils/pages';

const Pagination = ({page, changePage, totalPages}) => {
    
    

    let pagesArray = getPagesArray(totalPages);

    return (
        <div className="page-wrapper">
            <button onClick={() => changePage(page - 1)} >prev</button>
            {pagesArray.map(p =>
                <button
                    onClick={() => changePage(p)} 
                    key={p}
                    className={p === page ? styles.active : styles.page}
                >
                    {p}
                </button>
            )}
            <button onClick={() => changePage(page + 1)} >next</button>
        </div>
    )
}

export default Pagination;

