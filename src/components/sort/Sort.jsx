import React, { useState } from 'react';
import styles from './Sort.module.css';

const Sort = ({sort, onChangeSort}) => {
    const [open, setOpen] = useState(false);

    const list = [
        {name: 'популярности', sortProperty: 'rating'},
        {name: 'цене(возврастанию)', sortProperty: 'price'},
        {name: 'цене(убыванию)', sortProperty: '-price'},
        {name: 'названию', sortProperty: 'name'}
    ];

    const onClickListItem = (i) => {
        onChangeSort(i);
        setOpen(false);
    }

    return (
        <div className={styles.sort}>
            <div className={styles.label}>
                 Сортировка по: <span onClick={() => setOpen(!open)}>{sort.name}</span>
            {open && (
                <div className={styles.popup}>
                <ul>
                    {list.map((obj, i) => (
                        <li key={i} onClick={() => onClickListItem(obj)} className={sort.sortProperty === obj.sortProperty ? styles.active : ''}>
                            {obj.name}
                        </li>
                    ))}
                </ul>
                </div>
            )}
            </div>
        </div>
  )
}

export default Sort;
