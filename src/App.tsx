import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

/* AUTH */
const Login = lazy(() => import('./views/Auth/Login/Login'));
const RecuperarPassword = lazy(() => import('./views/Auth/RecuperarPassword/RecuperarPassword'));
const RestaurarPassword = lazy(() => import('./views/Auth/RestaurarPassword/RestaurarPassword'));
const PaginaPrincipal = lazy(() => import('./views/PaginaPrincipal/PaginaPrincipal'))

/* ADMIN */
const Nav = lazy(() => import('./components/Nav/Nav'));

function App() {
  return (
    <Router>
      <Suspense fallback={ '' }>
        <Switch>
          <Redirect exact from='/' to='/login' />
          {/* AUTH */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/recuperar-contrasena" component={RecuperarPassword} />
          <Route exact path="/restaurar-contrasena/:token" component={RestaurarPassword} />

          {/* PANTALLA PRINCIPAL */}
          <Route exact path="/pantalla-principal" component={PaginaPrincipal} />

          {/* ADMIN */}
          <Route path="/admin" component={Nav} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
