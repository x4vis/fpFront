import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

const Login = lazy(() => import('./views/Auth/Login/Login'));
const RecuperarPassword = lazy(() => import('./views/Auth/RecuperarPassword/RecuperarPassword'));

function App() {
  return (
    <Router>
      <Suspense fallback={ <h1>Loading...</h1> }>
        <Switch>
          <Redirect exact from='/' to='/login' />
          <Route path="/login" component={Login} />
          <Route path="/recuperar-contrasena" component={RecuperarPassword} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
