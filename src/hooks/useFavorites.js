import { useSelector } from "react-redux";

export const useFavorite = () => {
    const favorites = useSelector(state => state.favorites);

    return favorites;
}