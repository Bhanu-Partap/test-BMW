import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./main.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
