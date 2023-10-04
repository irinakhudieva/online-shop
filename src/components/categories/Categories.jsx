import React, { useState } from 'react';
import styles from './Categories.module.css';


const Categories = ({ category, onClickCategory, changePage }) => {
    const categories = ['Все товары', 'Черный чай', 'Зеленый чай', 'Фруктовый чай'];

    return (
        <div >
            <ul className={styles.categories}>
                {categories.map((categoriesName, index) => (
                    <li key={index} onClick={() => {onClickCategory(index); changePage(1)} }
                    className={category === index ? styles.active : ''}>
                        {categoriesName}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Categories;
