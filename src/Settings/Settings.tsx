import React from 'react';
import s from './Settings.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setMaxValueAC, setStartValueAC } from '../redux/counterReducer';
import {AppStateType} from "../redux/store";

type SettingsPropsType = {
    error: boolean
    setValuesAreSet: (set: boolean) => void
}

export const Settings = (props: SettingsPropsType) => {
    //useDispatch
    const dispatch = useDispatch()
    //useSelectors
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)

    return (
        <div className={s.display}>
            <label className={s.label}> max value:
                <input className={`${s.input} ${props.error ? s.error : ''}`} type='number' value={maxValue}
                       onChange={(e) => {
                           dispatch(setMaxValueAC(e.currentTarget.valueAsNumber))
                           props.setValuesAreSet(false)
                       }}/>
            </label>
            <label className={s.label}> start value:
                <input className={`${s.input} ${props.error ? s.error : ''}`} type='number' value={startValue}
                       onChange={(e) => {
                           dispatch(setStartValueAC(e.currentTarget.valueAsNumber))
                           props.setValuesAreSet(false)
                       }}/>
            </label>
        </div>
    )
}