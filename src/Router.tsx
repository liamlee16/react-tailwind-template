import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Page404 from "./pages/404";
import Dashboard from "./pages/Dashboard";
import Alerts from "./pages/Elements/Alerts";
import Avatars from "./pages/Elements/Avatars";
import Badges from "./pages/Elements/Badges";
import Buttons from "./pages/Elements/Buttons";
import Dashboards from "./pages/Elements/Dashboards";
import MenuList from "./pages/Elements/MenuList";
import ProgressBars from "./pages/Elements/ProgressBars";
import Inputs from "./pages/Forms/Inputs";
import Layouts from "./pages/Forms/Layouts";
import Selects from "./pages/Forms/Selects";
import Toggles from "./pages/Forms/Toggles";
import Footers from "./pages/Navigation/Footers";
import Headers from "./pages/Navigation/Headers";
import Sidebars from "./pages/Navigation/Sidebars";

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
    path: "/elements/badges",
    component: Badges,
    exact: true,
  },
  {
    path: "/elements/avatars",
    component: Avatars,
    exact: true,
  },
  {
    path: "/elements/menu-list",
    component: MenuList,
    exact: true,
  },
  {
    path: "/elements/alerts",
    component: Alerts,
    exact: true,
  },
  {
    path: "/elements/dashboards",
    component: Dashboards,
    exact: true,
  },
  {
    path: "/elements/progress-bars",
    component: ProgressBars,
    exact: true,
  },
  {
    path: "/forms/inputs",
    component: Inputs,
    exact: true,
  },
  {
    path: "/forms/selects",
    component: Selects,
    exact: true,
  },
  {
    path: "/forms/toggles",
    component: Toggles,
    exact: true,
  },
  {
    path: "/forms/layouts",
    component: Layouts,
    exact: true,
  },
  {
    path: "/navigation/headers",
    component: Headers,
    exact: true,
  },
  {
    path: "/navigation/footers",
    component: Footers,
    exact: true,
  },
  {
    path: "/navigation/sidebars",
    component: Sidebars,
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
