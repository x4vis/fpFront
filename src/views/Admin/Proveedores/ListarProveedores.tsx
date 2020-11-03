import React, { useState, useEffect } from 'react'
import BtnCrearRecurso from "../../../components/BtnCrearRecurso/BtnCrearRecurso";
import BtnBorrarBusqueda from "../../../components/BtnBorrarBusqueda/BtnBorrarBusqueda"

import { ProveedoresType } from "../../../interfaces/Admin/ProveedoresType";
import ProveedoresService from "../../../services/Admin/ProveedoresService";

import { Button, Input } from 'antd';
import { withRouter } from 'react-router-dom'


const ListarProveedores = ({ history }) => {

    const { Search } = Input;
    const [ proveedores, setProveedores ] = useState<Array<ProveedoresType>>([]);
    const [ busqueda, setBusqueda ] = useState<string>("");
    const [ buscar, setbuscar] = useState<boolean>(false);

    //llamado a la API
    useEffect(() => {
        
        const obtenerProveedores = async () => {
            ProveedoresService.getProveedores(true, 1, busqueda)
            .then(provs => {  
                console.log('provs', provs.data)
                setProveedores(provs.data);
            })
            .catch(err => console.log('err', err));
        }

        obtenerProveedores();

    }, [buscar])

    return (
        <div className="container-fluid">
            <h1 className="blue bw-text biggest-text">Proveedores</h1>

            <div className="main-card mt-4 p-5">
                <div className="row">
                    <div className="col-6 col-md-3 col-lg-2">
                        <BtnCrearRecurso recurso="proveedores"/>
                    </div>
                    <div className="col-6 col-md-3 col-lg-2">
                        <Button type="link"
                                size="large"
                                className="text-center fullWidth p-0 text-break">
                            <i className="fa fa-refresh mr-2"></i>
                            Actualizar
                        </Button>
                        
                    </div>
                    <div className="col-12 col-md-6 col-lg-8 mt-4 mt-md-0">
                        <Search placeholder="buscar proveedor por nombre"
                                size="large"
                                suffix={<BtnBorrarBusqueda setBusqueda={setBusqueda} setbuscar={setbuscar}/>}
                                value={busqueda}
                                onChange={e => setBusqueda(e.target.value)}
                                onSearch={() => setbuscar(true)} 
                                enterButton />
                    </div>
                </div>

                <div className="row">
                    
                </div>
            </div>
        </div>
    )
}
 
export default withRouter(ListarProveedores);