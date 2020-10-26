import React from 'react'
import { Button } from 'antd';
import { Link } from "react-router-dom";

const ListarUsuarios = () => {
    return (
        <div className="container-fluid">
            <h1 className="blue bw-text biggest-text">Usuarios</h1>

            <div className="row">
                <div className="col-6">
                    <Button className="blue-back white fullWidth"
                            type="primary"
                            size="large">
                        <Link to="/admin/crear-usuario">Crear</Link>
                    </Button>
                </div>
            </div>

            <div className="row">
                
            </div>
        </div>
    )
}
 
export default ListarUsuarios;