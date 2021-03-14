import React, { lazy } from 'react';
import { Route } from "react-router-dom";

const Login = lazy(() => import('../../views/Auth/Login/Login'));
const PasswordRecover = lazy(() => import('../../views/Auth/PasswordRecover/PasswordRecover'));
const PasswordRestore = lazy(() => import('../../views/Auth/PasswordRestore/PasswordRestore'));

function AuthRoutes() {
  return (
    <>
      <Route exact path="/auth/login" component={Login} />
      <Route exact path="/auth/recuperar-contrasena" component={PasswordRecover} />
      <Route exact path="/auth/restaurar-contrasena/:token" component={PasswordRestore} />
    </>
  )
}

export default AuthRoutes;
