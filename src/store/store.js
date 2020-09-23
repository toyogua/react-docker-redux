import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import listReducer from "../reducers/list";
import logger from "redux-logger";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers( {
        responses: listReducer
    }),
    composeEnhancers(applyMiddleware(thunk, logger))
);

export default store;
