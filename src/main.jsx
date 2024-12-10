import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.scss";
import App from "./App.jsx";
import "remixicon/fonts/remixicon.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);