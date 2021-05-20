import React, { Suspense } from "react";
import { useAuth } from "../Hooks/useAuth";

const AuthenticatedApp = React.lazy(() => import("../App/AuthorisedApp"));
const UnauthenticatedApp = React.lazy(() => import("../App/UnAuthorisedApp"));

function ProductHuntApp() {
  const user = useAuth();

  return (
    <Suspense fallback={<h2>loading....</h2>}>
      {user?.isLoggedIn ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Suspense>
  );
}

export default ProductHuntApp;
