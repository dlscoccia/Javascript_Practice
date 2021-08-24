import axios from 'axios';

const TRAER_USUARIOS = 'traer_usuarios';
const traerTodos = () => async (dispatch) => { 
    const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users'); 
    dispatch ({
        type: TRAER_USUARIOS, payload: respuesta.data, }) }
        
export {traerTodos, TRAER_USUARIOS} 