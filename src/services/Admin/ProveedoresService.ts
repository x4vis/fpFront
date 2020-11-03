import { AxiosResponse } from 'axios';
import API from '../config';
const URL = "/proveedores";

const ProveedoresService =  {

    getProveedores: async (paginated: boolean, page: number, search: string): Promise<AxiosResponse> => {
        return await API.get(`${URL}/listado`, { params: { paginated, page, search } });
    },

    getProveedor: async (id: number): Promise<AxiosResponse> => {
        return await API.get(`${URL}/${id}`);
    },

    postProveedor: async (data: object): Promise<AxiosResponse> => {
        return await API.post(`${URL}`, data);
    }
}

export default ProveedoresService;