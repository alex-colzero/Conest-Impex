"use client";

import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { FrameScreen } from "./screens/FrameScreen";
import { Servicii } from "./screens/Servicii";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <FrameScreen />,
  },
  {
    path: "/frame-3543",
    element: <FrameScreen />,
  },
  {
    path: "/servicii",
    element: <Servicii />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
