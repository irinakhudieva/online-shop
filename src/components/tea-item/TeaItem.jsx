import React, { useState } from 'react';
import styles from './TeaItem.module.css';
import { useNavigate } from 'react-router-dom';
import FavoritesItem from './FavoritesItem';
import Price from './Price';
import { useDispatch, useSelector} from 'react-redux';
import { addCart } from '../../store/cart/cart.slice';
import { itemMinus, itemPlus } from '../../store/price/price.slice';

const TeaItem = ({tea}) => {
  const [weight, setWeight] = useState(50);
    const navigate = useNavigate();
    const price = useSelector(state => state.price)
  
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);

    const isExists = cart.some(t => t.id === tea.id);
    
    return (
        <div className={styles.item}>
            <FavoritesItem tea={tea} />
            <img src={tea.image} alt="" />
            <h2 onClick={() => navigate(`/catalog-tea/${tea.id}`)}>{tea.name}</h2>
            <div className={styles.price}>
              {/* <Price tea={tea} /> */}
              <h3>{new Intl.NumberFormat('ru', {
                    style: 'currency',
                    currency: 'RUB',
                    minimumFractionDigits: 0
                }).format(tea.price)}
            </h3>
              <div className={styles.inputNumber}>
	              <button className={styles.numberMinus} type="button" onClick={() => dispatch(itemMinus(tea.id, tea.weight, tea.price))}>-</button>
	                  <input type="number" min="50" defaultValue="50" value={price.weight} step="50" onChange={(e) => setWeight(e.target.value)}/>
	              <button className={styles.numberPlus}  type="button" onClick={() => dispatch(itemPlus(tea))}>+</button>
              </div>
              <div className={styles.button}>
                {!isExists 
                  ? <button 
                    className='button'
                    onClick={() => dispatch(addCart(tea))}
                  >
                    в корзину
                  </button>
                  : <button
                      className='button-done'
                  >
                    в корзине
                  </button>

                }
                  
              </div>
            </div>     
        </div>
  )
}

export default TeaItem;
