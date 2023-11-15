import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "../configs/routes";

/**
 * Routes the rrequest to the select pages
 * @returns
 */
function Routing() {
  return (
    <Routes>
      {routes
        .filter((route) => !route.isPrivate)
        .map((route, index) => (
          <Route exact key={index} path={route.path} element={route.element} />
        ))}
    </Routes>
  );
}

export default Routing;
