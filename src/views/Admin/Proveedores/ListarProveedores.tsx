import React, { useState, useEffect } from 'react'
import { ProveedoresType } from "../../../interfaces/Admin/ProveedoresType";
import ProveedoresService from "../../../services/Admin/ProveedoresService";

import { Button } from 'antd';
import { withRouter } from 'react-router-dom'

const ListarProveedores = (props) => {

    const { history } = props;
    const [ proveedores, setProveedores ] = useState<Array<ProveedoresType>>([]);

    //llamado a la API
    useEffect(() => {
        
        const obtenerProveedores = async () => {
            ProveedoresService.getProveedores()
            .then(provs => {  
                setProveedores(provs.data);

                console.log('proveedores', proveedores);
            });
        }

        obtenerProveedores();

    }, [])

    return (
        <div className="container-fluid">
            <h1 className="blue bw-text biggest-text">Proveedores</h1>

            <div className="row">
                <div className="col-6">
                    <Button className="blue-back white fullWidth"
                            type="primary"
                            size="large"
                            onClick={() => { history.push('/admin/proveedores/crear') }} >
                        Crear
                    </Button>
                </div>
            </div>

            <div className="row">
                
            </div>
        </div>
    )
}
 
export default withRouter(ListarProveedores);