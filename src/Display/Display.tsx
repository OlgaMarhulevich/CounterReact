import React from 'react';
import s from './Display.module.css'

type DisplayPropsType = {
    counter: number
    disabled: boolean
    error: boolean
    maxValue: number
}

export const Display = (props: DisplayPropsType) => {
    return (

        <div className={s.display}>
            {props.error
                ? <div className={s.error}>{'Incorrect values!'}</div>
                : props.disabled ?
                    <div className={s.message}>enter values and press "set"</div> :
                    <div className={props.counter === props.maxValue ? s.classRed : ''}>{props.counter}</div>}
        </div>
    )
}