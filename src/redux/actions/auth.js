import { types } from "../types/types"


export const login= (idUser, name) => {
    return{
        type: types.login,
        payload: {
            idUser,
            name
        }
    }
}