import { AxiosResponse } from 'axios';
import API from '../config';
const URL = "/provider";

const ProvidersService = {

    getProviders: async (
        paginated: boolean, 
        page?: number, 
        search?: string, 
        resourceQty?: number
    ): Promise<AxiosResponse> => {
        return await API.get(`${URL}/list`, { 
            params: { 
                paginated, 
                page, 
                search, 
                resourceQty 
            } 
        });
    },

    getProvider: async (id: number): Promise<AxiosResponse> => {
        return await API.get(`${URL}/${id}`);
    },

    createProvider: async (data: object): Promise<AxiosResponse> => {
        return await API.post(`${URL}`, data);
    }
}

export default ProvidersService;