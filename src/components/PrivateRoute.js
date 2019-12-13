import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({
  component: Component,
  auth,
  type,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props =>
        ((type === "dj" && auth === "dj") || (type === "admin" && auth === "admin") ? (
          <Component {...props} {...rest} />
        ) : (
            <Redirect to="/login" />
          )
        )
      }
    />
  );
}