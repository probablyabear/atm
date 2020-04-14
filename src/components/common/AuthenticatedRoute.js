import React from "react";

import { Route, Redirect } from "react-router-dom";

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathName: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

export default AuthenticatedRoute;
