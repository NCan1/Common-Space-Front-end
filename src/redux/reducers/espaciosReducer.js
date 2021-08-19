import { types } from "../types/types";

const initialState = {
    espacios: []
};


export const espaciosReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.spacesLoaded:
            return {
                ...state,
                espacios: action.payload
            }
            
    
        default:
            return state;
    }
}