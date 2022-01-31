import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";
import {RootStateType} from "./redux/store";

export let rerenderEntireTree = (props: RootStateType) => {
    ReactDOM.render(

            <BrowserRouter>
                <Provider store={store}>
                <App />
                </Provider>
            </BrowserRouter>
       ,
        document.getElementById('root')
    );
}