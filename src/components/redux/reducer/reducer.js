import { ADD_FAV, REMOVE_FAV} from "../actions/types";

const initialState ={
    allCharacters: [],
    myFavorite: []
};

export const rootReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_FAV:
            return {
                ...state,
                myFavorite: [...state.myFavorite, payload]
            };

        case REMOVE_FAV:
            return {
                ...state,
                myFavorite: state.myFavorite.filter(character =>
                    parseInt(character.id) !== parseInt(payload))
            };

        default:
            return {...state};
    }
};