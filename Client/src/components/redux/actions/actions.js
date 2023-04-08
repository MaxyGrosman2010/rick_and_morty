import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS, ON_SEARCH, ON_CLOSE, GET_DETAIL_CHARACTER,
    ALL_CHARACTERS} from "./types";
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
    return function(dispatch){
        
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
            return dispatch({
                type: ON_SEARCH,
                payload: data
            });
    }).catch((error) => {throw error});
}};

export const getDetailCharacter = (id) => {
    return function(dispatch) {

        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {

            if(data){
                return dispatch({
                    type: GET_DETAIL_CHARACTER,
                    payload: data
                });
            } else{
                alert('No existe el id que pediste');
            };
    });
}};

export const getAllCharacters = () => {
    return (dispatch) => {
        axios('http://localhost:3001/rickandmorty/characters').then( ({data}) =>{
            if(data) return dispatch({
                type: ALL_CHARACTERS,
                payload: data
            })
            else alert('Hubo un error al traer todos los personajes');
        })
    };
};