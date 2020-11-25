import React, { Fragment, lazy } from 'react'
import { Route } from "react-router-dom";

const UsersList = lazy(() => import('../../views/Admin/Users/UsersList'));
const CreateUser = lazy(() => import('../../views/Admin/Users/CreateUser'));
const EditUser = lazy(() => import('../../views/Admin/Users/EditUser'));

const UsersRoutes = () => {
    return (
        <Fragment>
            <Route exact path="/admin/usuarios" component={UsersList}/>
            <Route exact path="/admin/usuarios/crear" component={CreateUser}/>
            <Route exact path="/admin/usuarios/editar" component={EditUser}/>
        </Fragment>
    )
}

export default UsersRoutes;