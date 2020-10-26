import API from '../../config';
import { AxiosResponse } from 'axios';

class UsuariosService {

    public guardarUsuario(data: object): Promise<AxiosResponse<any>> {
        return API.get('', data);
    }

}

export default UsuariosService;