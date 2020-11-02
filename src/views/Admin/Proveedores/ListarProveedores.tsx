import React from 'react'
import { Button } from 'antd';
import { withRouter } from 'react-router-dom'

const ListarProveedores = (props) => {

    const { history } = props;

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