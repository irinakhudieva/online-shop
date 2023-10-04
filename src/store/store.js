import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { api } from './api/api';
import { createLogger } from 'redux-logger';
import { cartSlice } from './cart/cart.slice';
import { favoritesSlice } from './favorites/favorites.slice';


const logger = createLogger({
    collapsed: true
})

const persistConfig = {
    key: 'root',
    storage,
}

const reducers = combineReducers({
    cart: cartSlice.reducer,
    favorites: favoritesSlice.reducer,
    [api.reducerPath]: api.reducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(logger)   
});

export const persistor = persistStore(store);