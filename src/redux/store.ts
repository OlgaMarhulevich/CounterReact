import {applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { counterReducer } from "./counterReducer";

const reducers = combineReducers({
    counter: counterReducer
})

export type AppStateType = ReturnType<typeof reducers>

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))

