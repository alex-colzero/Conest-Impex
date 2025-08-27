import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ElementContentPage } from "./screens/ElementContentPage";
import { ElementHomepage } from "./screens/ElementHomepage/ElementHomepage";
import { ElementHomepageMenu } from "./screens/ElementHomepageMenu";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <ElementHomepage />,
  },
  {
    path: "/x440-u45-homepage",
    element: <ElementHomepage />,
  },
  {
    path: "/x1440-u45-content-page",
    element: <ElementContentPage />,
  },
  {
    path: "/x440-u45-homepage-u45-menu-open",
    element: <ElementHomepageMenu />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
