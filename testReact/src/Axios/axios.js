import axios from 'axios';
const instance = axios.create({baseURL: 'http://www.localhost:8080'});
export default instance