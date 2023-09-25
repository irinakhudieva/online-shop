import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
    


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const findItem = state.find(item => item.id === action.payload.id);

            if (findItem) {
                findItem.weight = findItem.weight + findItem.weight;
                findItem.price = findItem.price + findItem.price;
            } else {
                state.push(action.payload);
            }  
        },
        itemPlus: (state, action) => {
            const findItem = state.find((obj) => obj.id === action.payload.id);

            if (findItem) {
                findItem.weight = findItem.weight + findItem.weight;
                findItem.price = findItem.price + findItem.price;

            }
            console.log(findItem)
        },
        itemMinus: (state, action) => {
            const findItem = state.find((obj) => obj.id === action.payload);

            if (findItem) {
                findItem.weight = findItem.weight - findItem.weight;
                findItem.price = findItem.price - findItem.price;

            }
            
        },
        removeItem: (state, action) => {
            const findIndex = state.filter(item => item.id !== action.payload);
            state.splice(findIndex, 1);
        }
    }

})


export const { addCart, removeItem, itemPlus, itemMinus } = cartSlice.actions;
