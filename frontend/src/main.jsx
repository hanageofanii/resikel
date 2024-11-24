import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import axios from "axios";
import App from "./App.jsx";
axios.default.withCredentioals = true;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
