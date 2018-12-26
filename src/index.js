import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./js/store";

import './css/index.css';
import App from "./js/components/App";

import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();