import {ADD_FAV, REMOVE_FAV, PAGE_FAV, FILTER_CARDS, ORDER_CARDS, ON_CLOSE, ON_SEARCH, 
    GET_DETAIL_CHARACTER, CHARACTER_PAGE, LOADING, RESET_PAGE, RESET_PAGE_FAV
} from "../actions/types";

const initialState ={
    allFavorite: [],
    allCharacter: [],
    detailCharacter: {},
    numPage: 1,
    favPage: 1,
    cantPage: 0,
};

export const rootReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_FAV:
            return state;

        case REMOVE_FAV:
            return state;

        case PAGE_FAV:
            return {...state, allFavorite: payload.characters, cantPage: payload.cantPage};

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
            return {...state, loading: !state.loading};

        case RESET_PAGE:
            return {...state, numPage: 1};

        case RESET_PAGE_FAV:
            return {...state, favPage:1};

        default:
            return state;
}};