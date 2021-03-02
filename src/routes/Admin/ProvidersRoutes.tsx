import React, { lazy } from 'react'
import { Route } from "react-router-dom";

const ProvidersList = lazy(() => import('../../views/Admin/Providers/ProvidersList'));
const CreateProvider = lazy(() => import('../../views/Admin/Providers/CreateProvider'));
const EditProvider = lazy(() => import('../../views/Admin/Providers/EditProvider'));

const ProvidersRoutes = () => {
    return (
        <>
            <Route exact path="/admin/proveedores" component={ProvidersList}/>
            <Route exact path="/admin/proveedores/crear" component={CreateProvider}/>
            <Route exact path="/admin/proveedores/editar" component={EditProvider}/>
        </>
    )
}

export default ProvidersRoutes;