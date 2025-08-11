import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Conest } from "./screens/Conest";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Conest />
  </StrictMode>,
);
