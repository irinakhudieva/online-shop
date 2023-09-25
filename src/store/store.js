import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as favoritesReducer } from './favorites/favorites.slice';
import { api } from './api/api';
import { createLogger } from 'redux-logger';
import { cartSlice } from './cart/cart.slice';
import { priceSlice } from './price/price.slice';


const logger = createLogger({
    collapsed: true
})

const reducers = combineReducers({
    favorites: favoritesReducer,
    cart: cartSlice.reducer,
    price: priceSlice.reducer,
    [api.reducerPath]: api.reducer
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(logger),
    
});