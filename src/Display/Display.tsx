import React from 'react';
import s from './Display.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/store";

type DisplayPropsType = {
    disabled: boolean
    error: boolean
}

export const Display = (props: DisplayPropsType) => {
    //useSelectors
    const counter = useSelector<AppStateType, number>(state => state.counter.counter)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)

    return (

        <div className={s.display}>
            {props.error
                ? <div className={s.error}>{'Incorrect values!'}</div>
                : props.disabled ?
                    <div className={s.message}>enter values and press "set"</div> :
                    <div className={counter === maxValue ? s.classRed : ''}>{counter}</div>}
        </div>
    )
}