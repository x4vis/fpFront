import React, { useState } from 'react'
import { Button, Input } from 'antd';
import BtnCrearRecurso from "../../../components/BtnCrearRecurso";
import BtnBorrarBusqueda from "../../../components/BtnBorrarBusqueda"
import TablaProveedores from "./TablaProveedores";

const ListarProveedores = () => {

    const { Search } = Input;

    //set states
    const [ busqueda, setBusqueda ] = useState<string>("");
    const [ valueSearch, setvalueSearch ] = useState<string>("");
    const [ actualizar, setActualizar ] = useState<boolean>(false);

    const handleSearch = (value) => {
        setBusqueda(value);
    }

    return (
        <div className="container-fluid">
            <h1 className="blue bw-text biggest-text">Proveedores</h1>

            <div className="main-card mt-4 p-5">
                <div className="row">
                    <div className="col-6 col-md-3 col-lg-2">
                        <BtnCrearRecurso recurso="proveedores" />
                    </div>
                    <div className="col-6 col-md-3 col-lg-2">
                        <Button type="link"
                                size="large"
                                className="text-center fullWidth p-0 text-break"
                                onClick={() => setActualizar(!actualizar)}>
                            <i className="fa fa-refresh mr-2"></i>
                            Actualizar
                        </Button>
                        
                    </div>
                    <div className="col-12 col-md-6 col-lg-8 mt-4 mt-md-0">
                        <Search placeholder="buscar proveedor por nombre"
                                size="large"
                                suffix={<BtnBorrarBusqueda setBusqueda={setBusqueda} setvalueSearch={setvalueSearch}/>}
                                value={valueSearch}
                                onChange={e => setvalueSearch(e.target.value)}
                                onSearch={handleSearch} 
                                enterButton />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <TablaProveedores busqueda={busqueda} actualizar={actualizar}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default ListarProveedores;