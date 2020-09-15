import React, { Fragment, lazy } from 'react';
import { Route } from "react-router-dom";

const CrearUsuario = lazy(() => import('../views/Admin/Usuarios/CrearUsuario'));
const EditarUsuario = lazy(() => import('../views/Admin/Usuarios/EditarUsuario'));

/* import CrearUsuario from '../views/Admin/Usuarios/CrearUsuario';
import EditarUsuario from '../views/Admin/Usuarios/EditarUsuario'; */

const AdminRoutes = () => {
  return (
      <Fragment>
        <Route exact path="/admin/crear-usuario" component={CrearUsuario} />
        <Route exact path="/admin/editar-usuario" component={EditarUsuario} />
      </Fragment>
  );
}

export default AdminRoutes;