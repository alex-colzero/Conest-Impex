"use client";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Conest } from "./screens/Conest";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Conest />
  </StrictMode>,
);
