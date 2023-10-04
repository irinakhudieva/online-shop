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
                findItem.weight += 50;
            } else {
                state.cart.push({ ...payload, weight: 50 });
            }  
        },
        itemMinus: (state, { payload }) => {
            const findItem = state.cart.find((item) => item.id === payload);

            if (findItem.weight === 0) {
                return findItem.weight;
            } else {
                findItem.weight -= 50;
            }
        },
        removeItem: (state, { payload }) => {
            const findIndex = state.cart.filter(item => item.id !== payload);
            state.cart.splice(findIndex, 1);
        }
    }

})


export const { addToCart, removeItem, itemMinus } = cartSlice.actions;
