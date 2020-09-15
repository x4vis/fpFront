import axios from 'axios';
import { environment } from '../environments/environment';

const BASE_URL: string = environment.api;

const API = axios.create({ 
    baseURL: BASE_URL,
});

export default API;