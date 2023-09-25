import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions } from '../store/favorites/favorites.slice';
import * as cartActions from '../store/cart/cart.slice';


const rootActions = {
    ...actions,
    ...cartActions
}

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])

}