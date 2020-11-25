import API from '../config';
import { AxiosResponse } from 'axios';

class UsersService {

    public createUser(data: object): Promise<AxiosResponse> {
        return API.get('', data);
    }

}

export default UsersService;