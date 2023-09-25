import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
    


export const priceSlice = createSlice({
    name: 'price',
    initialState,
    reducers: {
        itemPlus: (state, action) => {
            debugger
//             const findItem = state.find((obj) => obj.id === action.payload.id);
//  console.log(findItem)
//             if (findItem) {
//                 findItem.weight = state.weight + action.payload.weight;
//                 findItem.price = state.price + action.payload.price;

//             }
            // state.weight + action.payload.weight;
            // state.price + action.payload.price;

            const findItem = state.find(item => item.id === action.payload.id);

            if (findItem) {
                findItem.weight = findItem.weight + findItem.weight;
                findItem.price = findItem.price + findItem.price;
            }
            
        },
        itemMinus: (state, action) => {
            const findItem = state.find((obj) => obj.id === action.payload);

            if (findItem) {
                findItem.weight = findItem.weight - findItem.weight;
                findItem.price = findItem.price - findItem.price;

            }
            
        }
    }

})


export const { itemPlus, itemMinus } = priceSlice.actions;