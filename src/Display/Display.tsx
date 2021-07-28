import React from 'react';
import s from './Display.module.css'

type DisplayPropsType = {
    counter: number
    maxValue: number
    startValue: number
    message: boolean
    error: boolean
}

export const Display = (props: DisplayPropsType) => {
    return (
        <div className={s.display}>
            {props.error ?
                <div className={s.error}>Incorrect value!</div> :
                    props.message ?
                    <div className={s.message}>enter values and press "set"</div> :
                    <div className={(props.counter === props.maxValue) ? s.classRed : ''}>{props.counter}</div>}
        </div>
    )
}