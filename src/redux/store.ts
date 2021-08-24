import {applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { counterReducer } from "./counterReducer";
/*import {loadState, saveState} from "../utils/localStorageUtils";*/

const reducers = combineReducers({
    counter: counterReducer
})

export type AppStateType = ReturnType<typeof reducers>

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))

/*
export const store = createStore(reducers, loadState(), applyMiddleware(thunkMiddleware))

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})*/
