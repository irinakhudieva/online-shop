import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
};
    

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            const findItem = state.cart.find(item => item.id === payload.id);

            if (findItem) {
                findItem.count++;
            } else {
                state.cart.push({ ...payload, count: 1 });
            }  
        },
        itemMinus: (state, { payload }) => {
            const findItem = state.cart.find((item) => item.id === payload);

            if (findItem) {
                findItem.count--;
            } 
        },
        removeItem: (state, { payload }) => {
            const findIndex = state.cart.filter(item => item.id !== payload);
            state.cart.splice(findIndex, 1);
        }
    }

})

export const selectCart = (state) => state.cart;

export const { addToCart, removeItem, itemMinus } = cartSlice.actions;
