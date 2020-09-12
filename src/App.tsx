import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

/* AUTH */
const Login = lazy(() => import('./views/Auth/Login/Login'));
const RecuperarPassword = lazy(() => import('./views/Auth/RecuperarPassword/RecuperarPassword'));
const RestaurarPassword = lazy(() => import('./views/Auth/RestaurarPassword/RestaurarPassword'));

/* ADMIN */
const Nav = lazy(() => import('./components/Nav/Nav'));

function App() {
  return (
    <Router>
      <Suspense fallback={ <h1>Loading...</h1> }>
        <Switch>
          <Redirect exact from='/' to='/login' />
          {/* AUTH */}
          <Route path="/login" component={Login} />
          <Route path="/recuperar-contrasena" component={RecuperarPassword} />
          <Route path="/restaurar-contrasena/:token" component={RestaurarPassword} />

          {/* ADMIN */}
          <Route path="/admin" component={Nav} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
