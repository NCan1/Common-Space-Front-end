import { types } from "../types/types";


export const authReducer = (state={}, action) => {
    switch (action.type) {
        case types.login:
            return {
                idUser: action.payload.idUser,
                name: action.payload.name
            }
            
        case types.logout:
            return { }
    
        default:
            return state;
    }
}