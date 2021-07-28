import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    title: string
    onClickCallback: () => void
    counter?: number
    maxValue?: number
    startValue?: number
    currenMaxValue?: number
    currentStartValue?: number
    error: boolean
    disabled?: boolean
}

export const Button = (props: ButtonPropsType) => {
    let disabled = false;
    let classDisabled = '';

    if ((props.counter === props.maxValue && props.title === 'inc') ||
        (props.counter === props.startValue && props.title === 'reset') ||
        (props.error) || (props.disabled && props.title === 'set')) {
        disabled = true;
        classDisabled = s.classDisabled;
    }
    return (
        <button disabled={disabled}
                className={`${s.btn} ${classDisabled}`}
                onClick={() => props.onClickCallback()}>

            {props.title}
        </button>
    )
}