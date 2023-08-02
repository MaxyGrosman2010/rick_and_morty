import {ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS, ON_CLOSE, ON_SEARCH, 
    GET_DETAIL_CHARACTER, CHARACTER_PAGE, LOADING} from "../actions/types";

const initialState ={
    allFavorite: [],
    allCharacter: [],
    detailCharacter: {},
    numPage: 1,
    cantPage: 0,
    loading: false,
};

export const rootReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_FAV:
            return {...state, allFavorite: payload};

        case REMOVE_FAV:
            return {...state, allFavorite: payload};

        case FILTER_CARDS:
            return{...state, allCharacter: payload.characters, cantPage: payload.cantPage};

        case ORDER_CARDS:
            return{...state, allCharacter: payload.characters, numPage: 1};

        case ON_CLOSE:
            let closeFav = state.allFavorite.filter(character => parseInt(character.id) 
            !== parseInt(payload));
            return{...state, allCharacter: state.allCharacter.filter(character => 
                parseInt(character.id) !== parseInt(payload)), allFavorite: closeFav};

        case ON_SEARCH:
            return{...state, allCharacter: payload.characters, numPage: 1, 
                cantPage: payload.cantPage};

        case GET_DETAIL_CHARACTER:
            return{...state, detailCharacter: payload};

        case CHARACTER_PAGE:
            return{...state, allCharacter: payload.characters, numPage: payload.page, 
                cantPage: payload.cantPage};

        case LOADING:
            return {...state, loading: !state.loading}

        default:
            return state;
}};