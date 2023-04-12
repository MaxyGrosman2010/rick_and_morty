import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS, ON_SEARCH, ON_CLOSE, GET_DETAIL_CHARACTER} from "./types";
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
            }catch(error){console.error(error.message)};
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
            }catch(error){console.error(error.message)};
        };
};

export const filterCards = (gender) => {
    return{
        type: FILTER_CARDS,
        payload: gender
}};

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
}};

export const onSearch = (id) => {
    return async function(dispatch){
        try{
            let {data} = await axios.get(`${endPointChar}${id}`)
            if(data) return dispatch({
                type: ON_SEARCH,
                payload: data
            });
        }catch(error){console.error(error.message)};
    };
};

export const getDetailCharacter = (id) => {
    return function(dispatch){
        try{
            axios.get(`${endPointChar}${id}`).then(({data}) =>{
                if(data) return dispatch({
                    type: GET_DETAIL_CHARACTER,
                    payload: data
                });
            });
        }catch(error){console.error(error.message)};
    };
};