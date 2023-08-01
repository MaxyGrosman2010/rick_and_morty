import {ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS, ON_SEARCH, ON_CLOSE, 
    GET_DETAIL_CHARACTER, CHARACTER_PAGE} from "./types";
import headers from '../../utils/headers';
import axios from "axios";
import env from 'react-dotenv';

const endPointChar = env.REACT_APP_ENDPOINTCHAR;
const endPointFav = env.REACT_APP_ENDPOINTFAV;

export const addFav = (character) => {
    return async function (dispatch){
        try{
            let {data} = await axios.post(endPointFav, character);
            if(data) return dispatch({type: ADD_FAV, payload: data});
        }catch(error){window.alert("Add Favorite not found: ", error)};
    };
};

export const removeFav = (id) => {
    return async(dispatch) => {
        try{
            let{data} = await axios.delete(`${endPointFav}${id}`);
            if(data) return dispatch({type: REMOVE_FAV, payload: data});
        }catch(error){window.alert("Remove Favorite did not work:", error)};
    };
};

export const filterCards = (gender) => {
    return{type: FILTER_CARDS, payload: gender};
};

export const orderCards = (order) => {
    return{type: ORDER_CARDS, payload: order};
};

export const onClose = (id) => {
    return{type: ON_CLOSE, payload: id}
};

export const onSearch = (name) => {
    return async function(dispatch){
        try{
            let {data} = await axios.get(`${endPointChar}`, name, headers());
            return dispatch({type: ON_SEARCH, payload: data});
        }catch(error){window.alert("The character was not found: ", error)};
    };
};

export const getDetailCharacter = (id) => {
    return async function(dispatch){
        const {data} = await axios(`${endPointChar}${id}`, headers());
        return dispatch({type: GET_DETAIL_CHARACTER, payload: data});
    };
};

export const getPageCharacter = (page) => {
    return async function(dispatch){
        const {data} = await axios(`${endPointChar}?page=${page}`, headers());
        const response = {characters: data?.characters, page: page, 
            cantPage: data?.cantPage};
        return dispatch({type: CHARACTER_PAGE, payload: response});
    };
};