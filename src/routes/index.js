import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

const Episodes = lazy(() => import("../containers/Episodes"));
const MyWatchList = lazy(() => import("../containers/MyWatchList"));

const routes = [
  {
    path: ["/", "/episodes"],
    component: Episodes,
    exact: true,
  },
  {
    path: "/my-watch-list",
    component: MyWatchList,
  },
];
const Routing = () => {
  return (
    <Switch>
      {routes.map(({ component: Component, path, exact }, i) => (
        <Route component={Component} exact={exact} path={path} key={i} />
      ))}
    </Switch>
  );
};

export default Routing;
