import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS, ON_CLOSE, ON_SEARCH, GET_DETAIL_CHARACTER} from "../actions/types";

const initialState ={
    allFavorite: [],
    myFavorite: [],
    searchedCharacter: [],
    allCharacter: [],
    detailCharacter: {}
};

export const rootReducer = (state = initialState, {type, payload}) => {

    switch(type){

        case ADD_FAV:
            return {
                ...state,
                myFavorite: payload,
                allFavorite: payload,
            };

        case REMOVE_FAV:
            return {
                ...state,
                myFavorite: payload,
                allFavorite: payload
            };

        case FILTER_CARDS:
            if(payload === "All") return{
                ...state,
                myFavorite: state.allFavorite
            }
            return{
                ...state,
                myFavorite: state.allFavorite.filter(character =>
                    payload === character.gender)
            };

        case ORDER_CARDS:
            return{
                ...state,
                myFavorite: payload === "A" ? state.allFavorite.sort((a, b) => {return a.id - b.id}) :
                state.allFavorite.sort((a, b) => {return b.id - a.id})
            };

        case ON_CLOSE:
            let closeFav = state.allFavorite.filter(character => parseInt(character.id) !== parseInt(payload));

            return{
                ...state,
                allCharacter: state.allCharacter.filter(character => parseInt(character.id) !== parseInt(payload)),
                myFavorite: closeFav,
                allFavorite: closeFav
            };

        case ON_SEARCH:
            if(!state.allCharacter.some(character => character.id === payload.id)){
                return{
                    ...state,
                    allCharacter: [...state.allCharacter, payload]
            }}else return state;

        case GET_DETAIL_CHARACTER:
            return{
                ...state,
                detailCharacter: payload
            };

        default:
            return state;
}};