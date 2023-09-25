import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorites: (state, {payload: tea}) => {
            const isExists = state.some(t => t.id === tea.id);

            if(isExists) {
                const index = state.findIndex(item => item.id === tea.id);
                
                if(index !== -1) {
                    state.splice(index, 1);
                }
            } else {
                state.push(tea);
            }
        }
    }

})

export const { actions, reducer } = favoritesSlice;