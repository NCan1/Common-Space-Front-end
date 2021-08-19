import { types } from "../types/types"
const axios = require('axios');


const baseUrl = process.env.REACT_APP_API_URL;


export const tasksStartLoading = (idEspacio) =>{
    return async(dispatch) => {
        try {
            const { data } = await axios.get(`${baseUrl}/api/tareas/lista-tareas-espacio/${idEspacio}`);
            console.log(data.tareas); 
            dispatch(tasksLoaded(data.tareas))
         
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
        }
    }
}


const tasksLoaded = (tareas) => ({
    type: types.tasksLoaded,
    payload: tareas
});