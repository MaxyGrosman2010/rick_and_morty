import {ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS, ON_SEARCH, ON_CLOSE, 
    GET_DETAIL_CHARACTER, CHARACTER_PAGE, LOGIN, SIGNUP} from "./types";
import axios from "axios";
import env from 'react-dotenv';
const endPointChar = env.REACT_APP_ENDPOINTCHAR;
const endPointUser = env.REACT_APP_ENDPOINTUSER;
const endPointFav = env.REACT_APP_ENDPOINTFAV;

export const addFav = (character) => {
    return async function (dispatch){
        try{
            let {data} = await axios.post(endPointFav, character);

            if(data) return dispatch({
                type: ADD_FAV,
                payload: data
            });
        }catch(error){window.alert("Add Favorite not found: ", error)};
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
            let {data} = await axios.get(`${endPointChar}`, name);
            return dispatch({type: ON_SEARCH, payload: data});
        }catch(error){window.alert("The character was not found: ", error)};
    };
};

export const getDetailCharacter = (id) => {
    return async function(dispatch){
        const response = await axios(`${endPointChar}${id}`)
        return dispatch({type: GET_DETAIL_CHARACTER, payload: response});
    };
};

export const getPageCharacter = (page) => {
    return async function(dispatch){
        const {data} = await axios(`${endPointChar}?page=${page}`);
        const response = {characters: data?.characters, page: page, 
            cantPage: data?.cantPage};
        return dispatch({type: CHARACTER_PAGE, payload: response});
    };
};

export const login = (user) => {
    return async(dispatch) => {
        try{
            const response = await axios.post(`${endPointUser}login`, user);
            return dispatch({type: LOGIN, payload: response});
        }catch(error){window.alert(error)};
    };
};

export const signUp = (user) => {
    return async(dispatch) => {
        try{
            await axios.post(`${endPointUser}/signup`, user);
            return dispatch({type:SIGNUP});
        }catch(error){window.alert(error)};
    };
};