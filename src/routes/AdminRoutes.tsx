import React, { Fragment, lazy } from 'react';
import { Route } from "react-router-dom";

const ListarUsuarios = lazy(() => import('../views/Admin/Usuarios/ListarUsuarios'));
const CrearUsuario = lazy(() => import('../views/Admin/Usuarios/CrearUsuario'));
const EditarUsuario = lazy(() => import('../views/Admin/Usuarios/EditarUsuario'));

const AdminRoutes = () => {
  return (
      <Fragment>
        {/* USUARIOS */}
        <Route exact path="/admin/usuarios" component={ListarUsuarios} />
        <Route exact path="/admin/crear-usuario" component={CrearUsuario} />
        <Route exact path="/admin/editar-usuario" component={EditarUsuario} />

        {/* CATEGORIAS */}

        {/* SUBCATEGORIAS */}

        {/* UNIDADES DE MEDIDA */}

        {/* DESCUENTOS */}

        {/* PRODUCTOS */}
        
      </Fragment>
  );
}

export default AdminRoutes;