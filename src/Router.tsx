import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Page404 from "./pages/404";
import Dashboard from "./pages/Dashboard";
import Buttons from "./pages/Elements/Buttons";

const routes = [
  {
    path: "/",
    exact: true,
    component: Dashboard,
  },
  {
    path: "/elements/buttons",
    component: Buttons,
    exact: true,
  },
  {
    path: "*",
    component: Page404,
  },
];

function RouterConfig() {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  );
}

function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default RouterConfig;
