import { types } from "../types/types"

export const startLogin = (email, password) =>{
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(email, password))
        }, 2000);
    }
}


export const login= (idUser, name) => {
    return{
        type: types.login,
        payload: {
            idUser,
            name
        }
    }
}