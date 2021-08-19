import { types } from "../types/types"
const axios = require('axios');

const baseUrl = process.env.REACT_APP_API_URL;

export const startLogin = (email, password) =>{
    return async(dispatch) => {
        try {
            const { data } = await axios.post(`${baseUrl}/api/usuarios/login`,
            {
                Email:email,
                Password:password
            }
            );

            const {idUser, Nombre} = data.user;
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch(login(idUser, Nombre))
            return true
        
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                alert(`${error.response.data.message}`);
              } else if (error.request) {
                // The request was made but no response was received
                alert(`No hay respuesta`);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
              return false
        }
    }
}


const login= (idUser, name) => {
    return{
        type: types.login,
        payload: {
            idUser,
            name
        }
    }
}


export const startLogout = () => {
    return ( dispatch ) => {
        localStorage.clear();
        dispatch( logout() );
    }
}

const logout = () => ({ type: types.logout })