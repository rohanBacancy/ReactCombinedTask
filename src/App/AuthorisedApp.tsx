import React, { Suspense, FC, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const ProductHunt = lazy(() => import("../Container/productHunt"));

const AuthorisedApp: FC = () => {
  return (
    <div className="layout">
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route exact path={"/"} component={ProductHunt} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default AuthorisedApp;
