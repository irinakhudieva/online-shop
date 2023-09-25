import React, { useEffect, useState } from 'react';
import styles from './TeaItem.module.css';
import { InputNumber } from 'antd';


const Price = ({ tea }) => {
    
    const [price, setPrice] = useState(0);
    const [weight, setWeight] = useState(50);

    const onChange = (value) => {
        setWeight(value);
    };
 
    const calcPrice = (price, weight) => {
        if (weight === tea.weight) {
          setPrice(price);
        } else {
          const newPrice = price/tea.weight * weight;
          setPrice(newPrice);
        }
    }

    useEffect(() => {
        calcPrice(tea.price, weight);
    }, [weight, price, tea.price])
    
    return (
        <div>
           <h3>{new Intl.NumberFormat('ru', {
                    style: 'currency',
                    currency: 'RUB',
                    minimumFractionDigits: 0
                }).format(price)}
            </h3>
            <InputNumber 
                style={{
                    width: 63,
                    height: 30,
                    borderColor: 'rgba(85, 107, 47, 0.5)',  
                }}
                min={50} 
                max={1000} 
                defaultValue={50} 
                step={50} size={'small'} 
                value={weight} 
                onChange={onChange} 
            /> гр.        
        </div>
    )
}

export default Price;

