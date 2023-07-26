import {ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS, ON_CLOSE, ON_SEARCH, 
    GET_DETAIL_CHARACTER, CHARACTER_PAGE, LOGIN, SIGNUP} from "../actions/types";

const initialState ={
    allFavorite: [],
    allCharacter: [],
    detailCharacter: {},
    numPage: 1,
    user: {},
    cantPage: 0
};

export const rootReducer = (state = initialState, {type, payload}) => {

    switch(type){

        case ADD_FAV:
            return {...state, allFavorite: payload};

        case REMOVE_FAV:
            return {...state, allFavorite: payload};

        case FILTER_CARDS:
            if(payload === "All") 
                return{...state, allFavorite: state.allFavorite};
            return{...state, allFavorite: state.allFavorite.filter(character => 
                payload === character.gender)};

        case ORDER_CARDS:
            return{...state, allFavorite: payload === "A" ? 
            state.allFavorite.sort((a, b) => {return a.id - b.id}) : 
            state.allFavorite.sort((a, b) => {return b.id - a.id})};

        case ON_CLOSE:
            let closeFav = state.allFavorite.filter(character => parseInt(character.id) 
            !== parseInt(payload));

            return{...state, allCharacter: state.allCharacter.filter(character => 
                parseInt(character.id) !== parseInt(payload)), allFavorite: closeFav};

        case ON_SEARCH:
            if(!state.allCharacter.some(character => character.id === payload.id))
                return{...state, allCharacter: payload}
            else return state;

        case GET_DETAIL_CHARACTER:
            return{...state, detailCharacter: payload};

        case CHARACTER_PAGE:
            return{...state, allCharacter: payload.characters, numPage: payload.page, 
                cantPage: payload.cantPage};
        
        case LOGIN:
            return {...state, user: payload};
        
        case SIGNUP:
            return state;

        default:
            return state;
}};