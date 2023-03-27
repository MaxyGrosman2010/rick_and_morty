import { ADD_FAV, REMOVE_FAV, ONCLOSE } from "./types";

export const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character
}};

export const removeFav = (id) => {
    return{
        type: REMOVE_FAV,
        payload: id
}};

export const onClose = (id) => {
    return{
        type: ONCLOSE,
        payload: id
    };
}