import React, { FC, lazy } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

const Login = lazy(() => import("../Components/Login"));
const Register = lazy(() => import("../Components/register"));

const UnAuthorisedApp: FC = () => {
  const location = useLocation();

  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
      <Redirect
        to={{
          pathname: "/",
          state: { from: location },
        }}
      />
    </Switch>
  );
};

export default UnAuthorisedApp;
