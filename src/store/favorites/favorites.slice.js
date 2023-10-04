import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorites: (state, {payload}) => {
            const isExists = state.some(t => t.id === payload.id);

            if(isExists) {
                const index = state.findIndex(item => item.id === payload.id);
                
                if(index !== -1) {
                    state.splice(index, 1);
                }
            } else {
                state.push(payload);
            }
        }
    }

})

export const { toggleFavorites } = favoritesSlice.actions;
