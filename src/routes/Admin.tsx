import React, { Suspense, lazy, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const CrearUsuario = lazy(() => import('../views/Admin/Usuarios/CrearUsuario'));
const EditarUsuario = lazy(() => import('../views/Admin/Usuarios/EditarUsuario'));

const Admin = () => {
  return (
    <Router>
        <Suspense fallback={ <h1>Loading...</h1> }>
            <Switch>
                <Route path="/admin/crear-usuario" component={CrearUsuario} />
                <Route path="/admin/editar-usuario" component={EditarUsuario} />
            </Switch>
        </Suspense>
    </Router>
  );
}

export default Admin;