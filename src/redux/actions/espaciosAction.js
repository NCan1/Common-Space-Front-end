import { types } from "../types/types"
const axios = require('axios');


const baseUrl = process.env.REACT_APP_API_URL;

// const espacios=[
//     {
//       idEspacio: 1,
//       nombre: 'casa'
//     },
//     {
//       idEspacio: 2,
//       nombre: 'depa'
//     },
//     {
//       idEspacio: 3,
//       nombre: 'cabaña'
//     }
// ]

export const spacesStartLoading = (idUser) =>{
    return async(dispatch) => {
        try {
            const { data } = await axios.get(`${baseUrl}/api/espacios/lista-espacios-usuario/${idUser}`);
            console.log(data.espacios); 
            dispatch(spacesLoaded(data.espacios))
         
        } catch (error) {
            console.log(error);
        }
    }
}


const spacesLoaded = (espacios) => ({
    type: types.spacesLoaded,
    payload: espacios
});