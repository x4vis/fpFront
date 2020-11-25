import React, { Fragment, lazy } from 'react'
import { Route } from "react-router-dom";

const ProvidersList = lazy(() => import('../../views/Admin/Providers/ProvidersList'));
const CreateProvider = lazy(() => import('../../views/Admin/Providers/CreateProvider'));
const EditProvider = lazy(() => import('../../views/Admin/Providers/EditProvider'));

const ProvidersRoutes = () => {
    return (
        <Fragment>
            <Route exact path="/admin/proveedores" component={ProvidersList}/>
            <Route exact path="/admin/proveedores/crear" component={CreateProvider}/>
            <Route exact path="/admin/proveedores/editar" component={EditProvider}/>
        </Fragment>
    )
}

export default ProvidersRoutes;