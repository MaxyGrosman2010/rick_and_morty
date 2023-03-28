import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS} from "../actions/types";

const initialState ={
    allCharacters: [],
    myFavorite: []
};

export const rootReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_FAV:
            return {
                ...state,
                myFavorite: [...state.myFavorite, payload],
                allCharacters: [...state.allCharacters, payload]
            };

        case REMOVE_FAV:
            return {
                ...state,
                myFavorite: state.myFavorite.filter(character =>
                    parseInt(character.id) !== parseInt(payload)),
                allCharacters: state.allCharacters.filter(character =>
                    parseInt(character.id) !== parseInt(payload))
            };

        case FILTER_CARDS:
            if(payload === "All") return{
                ...state,
                myFavorite: state.allCharacters
            }
            return{
                ...state,
                myFavorite: state.allCharacters.filter(character =>
                    payload === character.gender)
            };

        case ORDER_CARDS:
            return{
                ...state,
                myFavorite: payload === "A" ? state.allCharacters.sort((a, b) => {return a.id - b.id}) :
                state.allCharacters.sort((a, b) => {return b.id - a.id})
            };

        default:
            return state;
    }
};