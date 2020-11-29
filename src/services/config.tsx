import axios, { AxiosStatic, CancelTokenSource } from 'axios';
import { environment } from '../environments/environment';

const BASE_URL: string = environment.api;

const API = axios.create({ 
    baseURL: BASE_URL,
});


export let source: CancelTokenSource = axios.CancelToken.source();
export let Axios: AxiosStatic = axios;

export default API;