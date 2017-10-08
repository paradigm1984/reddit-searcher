// packages
import React from "react";
import ReactDOM from "react-dom";

// imports
import App from "./components/app.js";
import 'bootstrap/dist/css/bootstrap.css';
require("../server/css/stylesheet.scss");


ReactDOM.render(
  <App />, document.getElementById("App")
);
