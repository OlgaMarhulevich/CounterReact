import React from 'react';
import s from './Display.module.css'

type DisplayPropsType = {
    counter: number
    disabled: boolean
    error: string
    red: boolean
}

export const Display = (props: DisplayPropsType) => {
    return (
        <div className={s.display}>
            {props.error ?
                <div className={s.error}>{props.error}</div> :
                    props.disabled ?
                    <div className={s.message}>enter values and press "set"</div> :
                    <div className={ props.red ? s.classRed : ''}>{props.counter}</div>}
        </div>
    )
}