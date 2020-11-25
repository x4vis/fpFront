import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

/* AUTH */
const Login = lazy(() => import('./views/Auth/Login/Login'));
const PasswordRecover = lazy(() => import('./views/Auth/PasswordRecover/PasswordRecover'));
const PasswordRestore = lazy(() => import('./views/Auth/PasswordRestore/PasswordRestore'));
const MainPage = lazy(() => import('./views/MainPage/MainPage'))

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
          <Route exact path="/recuperar-contrasena" component={PasswordRecover} />
          <Route exact path="/restaurar-contrasena/:token" component={PasswordRestore} />

          {/* PANTALLA PRINCIPAL */}
          <Route exact path="/pantalla-principal" component={MainPage} />

          {/* ADMIN */}
          <Route path="/admin" component={Nav} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
