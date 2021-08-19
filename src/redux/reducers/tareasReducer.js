import { types } from "../types/types";


export const tareasReducer = (state={}, action) => {
    switch (action.type) {
        case types.tasksLoaded:
            return {
                ...state,
                tareas: action.payload
            }
            
    
        default:
            return state;
    }
}