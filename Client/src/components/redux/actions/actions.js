import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS, ON_SEARCH, ON_CLOSE, GET_DETAIL_CHARACTER} from "./types";
import axios from "axios";

export const addFav = (character) => {
    return{
        type: ADD_FAV,
        payload: character
}};

export const removeFav = (id) => {
    return{
        type: REMOVE_FAV,
        payload: id
}};

export const filterCards = (gender) => {
    return{
        type: FILTER_CARDS,
        payload: gender
}};

export const orderCards = (order) => {
    return{
        type: ORDER_CARDS,
        payload: order
    }
};

export const onClose = (id) => {
    return{
        type: ON_CLOSE,
        payload: id
}};

export const onSearch = (id) => {
    return async function(dispatch){
        
        axios.get(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {

            return dispatch({
                type: ON_SEARCH,
                payload: data
            });
    });
}};

export const getDetailCharacter = (id) => {
    return async function(dispatch) {

        axios.get(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {

            return dispatch({
                type: GET_DETAIL_CHARACTER,
                payload: data
            });
    });
}};