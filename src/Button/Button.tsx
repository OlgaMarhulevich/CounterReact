import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    title: string
    onClickCallback: () => void
    disabled: boolean
}

export const Button = (props: ButtonPropsType) => {

    return (
        <button disabled={props.disabled}
                className={`${s.btn} ${props.disabled ? s.classDisabled : ''}`}
                onClick={() => props.onClickCallback()}>

            {props.title}
        </button>
    )
}