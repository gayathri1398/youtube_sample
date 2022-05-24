import { legacy_createStore as createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import { DataReducer } from "./Data/data.reducer";

const middleware = [thunk]

if(process.env.NODE_ENV==="development"){
    const {logger} = require("redux-logger")
    middleware.push(logger)
}

const store = createStore(DataReducer,{},applyMiddleware(...middleware));

export default store;