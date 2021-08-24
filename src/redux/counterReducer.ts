import {Dispatch} from "react";
import {AppStateType} from "./store";

export enum ACTION_TYPES {
    INC_VALUE = "INC-VALUE",
    RESET_VALUE = "RESET-VALUE",
    SET_VALUE_FROM_STORAGE = "SET-VALUE-FROM-STORAGE",
    SET_START_VALUE = "SET-START-VALUE",
    SET_MAX_VALUE = "SET-MAX-VALUE",
}

export type StateType = typeof initialState
const initialState = {
    counter: 0,
    maxValue: 5,
    startValue: 0,
}

export const counterReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case ACTION_TYPES.INC_VALUE:
            if (state.counter + 1 <= state.maxValue) {
                return {...state, counter: state.counter + 1}
            }
            return {...state}
        case ACTION_TYPES.RESET_VALUE:
            return {...state, counter: state.startValue}
        case ACTION_TYPES.SET_VALUE_FROM_STORAGE:
            return {...state, startValue: action.startValue, maxValue: action.maxValue, counter: action.startValue}
        case ACTION_TYPES.SET_START_VALUE:
            return {...state, startValue: action.startValue}
        case ACTION_TYPES.SET_MAX_VALUE:
            return {...state, maxValue: action.maxValue}
        default:
            return {...state}
    }
}

//ActionType
export type ActionType = IncValueACType
                        | ResetValueACType
                        | SetValueFromLocalStorageACType
                        | SetStartValueACType
                        | SetMaxValueACType
//ACTypes
export type IncValueACType = {
    type: ACTION_TYPES.INC_VALUE
}
export type ResetValueACType = {
    type: ACTION_TYPES.RESET_VALUE
}
export type SetValueFromLocalStorageACType = {
    type: ACTION_TYPES.SET_VALUE_FROM_STORAGE
    startValue: number
    maxValue: number
}
export type SetStartValueACType = {
    type: ACTION_TYPES.SET_START_VALUE
    startValue: number
}
export type SetMaxValueACType = {
    type: ACTION_TYPES.SET_MAX_VALUE
    maxValue: number
}

//AC
export const incValueAC = (): IncValueACType => {
    return {type: ACTION_TYPES.INC_VALUE}
}
export const resetValueAC = (): ResetValueACType => {
    return {type: ACTION_TYPES.RESET_VALUE}
}
export const setValueFromLocalStorageAC = (startValue: number, maxValue: number): SetValueFromLocalStorageACType => {
    return {type: ACTION_TYPES.SET_VALUE_FROM_STORAGE, startValue, maxValue}
}
export const setStartValueAC = (startValue: number): SetStartValueACType => {
    return {type: ACTION_TYPES.SET_START_VALUE, startValue}
}
export const setMaxValueAC = (maxValue: number): SetMaxValueACType => {
    return {type: ACTION_TYPES.SET_MAX_VALUE, maxValue}
}

//thunk
export const setValuesThunkCreator = () => (dispatch: Dispatch<ActionType>, getState: () => AppStateType) => {
    localStorage.setItem('start value', JSON.stringify(getState().counter.startValue))
    localStorage.setItem('max value', JSON.stringify(getState().counter.maxValue))
    dispatch(resetValueAC())
}
export const getValuesThunkCreator = () => (dispatch: Dispatch<ActionType>) => {
    const startValue = localStorage.getItem('start value')
    const maxValue = localStorage.getItem('max value')
    if (startValue && maxValue) {
        dispatch(setValueFromLocalStorageAC(JSON.parse(startValue), JSON.parse(maxValue)))
    }
}
