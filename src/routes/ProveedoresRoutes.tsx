import React, { Fragment, lazy } from 'react'
import { Route } from "react-router-dom";

const ListarProveedores = lazy(() => import('../views/Admin/Proveedores/ListarProveedores'));
const CrearProveedor = lazy(() => import('../views/Admin/Proveedores/CrearProveedor'));
const EditarProveedor = lazy(() => import('../views/Admin/Proveedores/EditarProveedor'));

const ProveedoresRoutes = () => {
    return (
        <Fragment>
            <Route exact path="/admin/proveedores" component={ListarProveedores}/>
            <Route exact path="/admin/proveedores/crear" component={CrearProveedor}/>
            <Route exact path="/admin/proveedores/editar" component={EditarProveedor}/>
        </Fragment>
    )
}

export default ProveedoresRoutes;