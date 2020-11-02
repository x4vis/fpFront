import React, { Fragment, lazy } from 'react';
import { Route } from "react-router-dom";
import ProveedoresRoutes from './ProveedoresRoutes';

const ListarUsuarios = lazy(() => import('../views/Admin/Usuarios/ListarUsuarios'));
const CrearUsuario = lazy(() => import('../views/Admin/Usuarios/CrearUsuario'));
const EditarUsuario = lazy(() => import('../views/Admin/Usuarios/EditarUsuario'));

const AdminRoutes = () => {
  return (
      <Fragment>
        {/* USUARIOS */}
        <Route exact path="/admin/usuarios" component={ListarUsuarios} />
        <Route exact path="/admin/usuarios/crear" component={CrearUsuario} />
        <Route exact path="/admin/usuarios/editar" component={EditarUsuario} />

        {/* PROVEEDORES */}
        <ProveedoresRoutes />

        {/* CATEGORIAS */}

        {/* SUBCATEGORIAS */}

        {/* UNIDADES DE MEDIDA */}

        {/* DESCUENTOS */}

        {/* PRODUCTOS */}
        
      </Fragment>
  );
}

export default AdminRoutes;