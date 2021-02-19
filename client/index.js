import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import './index.css';

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
    ReactDOM.hydrate(<Router><App/></Router>, rootElement);
} else {
    ReactDOM.render(<Router><App/></Router>, rootElement);
}