import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Login = lazy(() => import('./views/Login/Login'));
const RecuperarPassword = lazy(() => import('./views/RecuperarPassword/RecuperarPassword'));

function App() {
  return (
    <Router>
      <Suspense fallback={ <h1>Loading...</h1> }>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/recuperar-contrasena" component={RecuperarPassword} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
