import {Dispatch} from "react";

export enum ACTION_TYPES {
    INC_VALUE = "INC-VALUE",
    SET_VALUE = "SET-VALUE",
    RESET_VALUE = "RESET-VALUE",
}

export type StateType = typeof initialState
const initialState = {
    counter: 1,
    maxValue: 3,
    startValue: 1,
}

export const counterReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case ACTION_TYPES.INC_VALUE:
            if (state.counter + 1 <= state.maxValue) {
                return {...state, counter: state.counter + 1}
            }
            return {...state}
        case ACTION_TYPES.SET_VALUE:
            return {...state, startValue: action.currentStartValue, maxValue: action.currentMaxValue, counter: action.currentStartValue}
        case ACTION_TYPES.RESET_VALUE:
            return {...state, counter: state.startValue}
        default:
            return {...state}
    }
}

//ActionType
export type ActionType = IncValueACType | SetValueACType | ResetValueACType
//ACTypes
export type IncValueACType = {
    type: ACTION_TYPES.INC_VALUE
}
export type SetValueACType = {
    type: ACTION_TYPES.SET_VALUE
    currentStartValue: number
    currentMaxValue: number
}
export type ResetValueACType = {
    type: ACTION_TYPES.RESET_VALUE
}
//AC
export const incValueAC = (): IncValueACType => {
    return {type: ACTION_TYPES.INC_VALUE}
}
export const setValueAC = (currentStartValue: number, currentMaxValue: number): SetValueACType => {
    return {type: ACTION_TYPES.SET_VALUE, currentStartValue, currentMaxValue}
}
export const resetValueAC = (): ResetValueACType => {
    return {type: ACTION_TYPES.RESET_VALUE}
}

//thunk
export const setValuesThunkCreator = (startValue: number, maxValue: number) => (dispatch: Dispatch<ActionType>) => {
    localStorage.setItem('start value', JSON.stringify(startValue))
    localStorage.setItem('max value', JSON.stringify(maxValue))
    dispatch(setValueAC(startValue, maxValue))
}
export const getValuesThunkCreator = () => (dispatch: Dispatch<ActionType>) => {
    const startValue = localStorage.getItem('start value')
    const maxValue = localStorage.getItem('max value')
    if (startValue && maxValue) {
        dispatch(setValueAC(JSON.parse(startValue), JSON.parse(maxValue)))
    }
}
