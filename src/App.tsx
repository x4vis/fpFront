import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { notification } from 'antd';

/* AUTH */
const Auth = lazy(() => import('./routes/Auth/AuthRoutes'));

/* MAIN */
const MainPage = lazy(() => import('./views/MainPage/MainPage'))

/* ADMIN */
const Nav = lazy(() => import('./components/Nav/Nav'));

function App() {
  notification.config({
    placement: 'topRight',
    duration: 3,
  });

  return (
    <Router>
      <Suspense fallback={ '' }>
        <Switch>
          <Redirect exact from='/' to='/auth/login' />
          {/* AUTH */}
          <Route path="/auth" component={Auth}/>

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
