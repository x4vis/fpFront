import { AxiosResponse } from 'axios';
import API, { source } from '../config';
const URL = "/providers";

const ProvidersService =  {

    getProviders: async (paginated: boolean, page?: number, search?: string, resourceQty?: number): Promise<AxiosResponse> => {
        return await API.get(`${URL}/list`, { params: { paginated, page, search, resourceQty }, cancelToken: source.token });
    },

    getProvider: async (id: number): Promise<AxiosResponse> => {
        return await API.get(`${URL}/${id}`);
    },

    createProvider: async (data: object): Promise<AxiosResponse> => {
        return await API.post(`${URL}`, data);
    }
}

export default ProvidersService;