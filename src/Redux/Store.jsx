import { createStore ,combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { BookReducers } from "./Reducers/BookReducers";
let rootreducers=combineReducers({
    BookReducers
})
export const store=  createStore(rootreducers ,applyMiddleware(thunk))