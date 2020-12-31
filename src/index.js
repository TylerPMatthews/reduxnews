import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import logger from "redux-logger";
import {BrowserRouter as Router} from 'react-router-dom';
const store = createStore(rootReducer, applyMiddleware(thunk,logger))
ReactDOM.render(<Router><Provider store={store}><App /></Provider></Router>, document.getElementById("root"));
