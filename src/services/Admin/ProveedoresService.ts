import { AxiosResponse } from 'axios';
import API from '../config';
const URL = "/proveedores";

const ProveedoresService =  {

    getProveedores: async (): Promise<AxiosResponse> => {
        return await API.get(`${URL}`);
    },

    getProveedor: async (id: number): Promise<AxiosResponse> => {
        return await API.get(`${URL}/${id}`);
    },

    postProveedor: async (data: object): Promise<AxiosResponse> => {
        return await API.post(`${URL}`, data);
    }
}

export default ProveedoresService;