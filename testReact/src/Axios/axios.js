import axios from 'axios';
const instance = axios.create({baseURL: 'https://18.222.158.24:8080'});
export default instance