import React from "react";
import { Route, Redirect } from "react-router-dom";
import Typography from '@material-ui/core/Typography';

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
            <Typography variant="h4"> You do not have access to this page. </Typography>
          )
        )
      }
    />
  );
}