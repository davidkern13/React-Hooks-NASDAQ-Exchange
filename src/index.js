import React from "react";
import ReactDOM from "react-dom";
import { initialStore } from "./store/index";
import { callExchangeSaga } from "./store/exchange/actions";

import * as serviceWorker from './serviceWorker';

import App from "./App";

const store = initialStore();

store.dispatch(callExchangeSaga());

ReactDOM.render(
        <App />,
    document.getElementById("root")
);

serviceWorker.unregister();
