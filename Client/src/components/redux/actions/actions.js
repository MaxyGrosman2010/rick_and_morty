import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS, ON_SEARCH, ON_CLOSE, GET_DETAIL_CHARACTER,
        ALL_CHARACTERS, HANDLE_NUMBER, NEXT_PAGE, PREV_PAGE} from "./types";
import axios from "axios";

const endPointFav = 'http://localhost:3001/rickandmorty/favorite/';
const endPointChar = 'http://localhost:3001/rickandmorty/character/';

export const addFav = (character) => {
    return async function (dispatch){
        try{
            let {data} = await axios.post(endPointFav, character);

            if(data) return dispatch({
                type: ADD_FAV,
                payload: data
            });
        }catch(error){console.log("Add Favorite not found: ", error)};
    };
};

export const removeFav = (id) => {
    return async(dispatch) => {
        try{
            let{data} = await axios.delete(`${endPointFav}${id}`);

            if(data) return dispatch({
                type: REMOVE_FAV,
                payload: data
            });
        }catch(error){console.log("Remove Favorite did not work:", error)};
    };
};

export const filterCards = (gender) => {
    return{
        type: FILTER_CARDS,
        payload: gender
    }
};

export const orderCards = (order) => {
    return{
        type: ORDER_CARDS,
        payload: order
    };
};

export const onClose = (id) => {
    return{
        type: ON_CLOSE,
        payload: id
    }
};

export const onSearch = (id) => {
    return async function(dispatch){
        try{
            let {data} = await axios.get(`${endPointChar}${id}`)
            if(data) return dispatch({
                type: ON_SEARCH,
                payload: data
            });
        }catch(error){console.log("The character was not found: ", error)};
    };
};

export const getDetailCharacter = (id) => {
    return function(dispatch){

        axios.get(`${endPointChar}${id}`).then(({data}) =>{
            if(data) return dispatch({
                type: GET_DETAIL_CHARACTER,
                payload: data
            });
        }).catch((error) => console.log("The character detail was not found: ", error));
    };
};

export const getAllCharacter = () => {
    return function(dispatch){
        axios(`${endPointChar}`).then(({data}) => {
            if(data) return dispatch({
                type: ALL_CHARACTERS,
                payload: data
            });
        });
    };
};

export const handleNumber = (num) => {
    return{
        type: HANDLE_NUMBER,
        payload: num
    };
};

export const nextPage = () => {
    return {
        type: NEXT_PAGE
    };
};

export const prevPage = () => {
    return{
        type: PREV_PAGE
    };
};