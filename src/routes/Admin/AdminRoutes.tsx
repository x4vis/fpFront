import React, { Fragment, lazy } from 'react';

import ProvidersRoutes from './ProvidersRoutes';
import UsersRoutes from './UsersRoutes'

const AdminRoutes = () => {
  return (
      <Fragment>
        {/* USUARIOS */}
        <UsersRoutes />

        {/* PROVEEDORES */}
        <ProvidersRoutes />

        {/* CATEGORIAS */}

        {/* SUBCATEGORIAS */}

        {/* UNIDADES DE MEDIDA */}

        {/* DESCUENTOS */}

        {/* PRODUCTOS */}
        
      </Fragment>
  );
}

export default AdminRoutes;