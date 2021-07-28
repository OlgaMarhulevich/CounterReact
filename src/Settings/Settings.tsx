import React from 'react';
import s from './Settings.module.css'

type SettingsPropsType = {
    setCurrenMaxValue: (value: number) => void
    setCurrentStartValue: (value: number) => void
    currenMaxValue: number
    currentStartValue: number
    setMessage: (mes: boolean) => void
    setError: (error: boolean) => void
    setDisabled: (disabled: boolean) => void
}

export const Settings = (props: SettingsPropsType) => {

    const errorStart = () => {
        if (props.currentStartValue < 0 || props.currentStartValue >= props.currenMaxValue) {
            props.setError(true)
            return s.error
        } else if (props.currentStartValue < props.currenMaxValue) {
            props.setError(false)
        }
    }

    const errorMax = () => {
        if (props.currentStartValue >= props.currenMaxValue) {
            props.setError(true)
            return s.error
        } else if (props.currentStartValue > 0) {
            props.setError(false)
        }
    }

    const onChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentMaxValue = +e.currentTarget.value
        props.setCurrenMaxValue(currentMaxValue)
        props.setMessage(true)
        props.setDisabled(false)
    }
    const onChangeStart = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentStartValue = +e.currentTarget.value
        props.setCurrentStartValue(currentStartValue)
        props.setMessage(true)
        props.setDisabled(false)
    }

    return (
        <div className={s.display}>
            <label className={s.label}> max value:
                <input className={`${s.input} ${errorMax()}`} type='number' value={props.currenMaxValue}
                       onChange={onChangeMax}/>
            </label>
            <label className={s.label}> start value:
                <input className={`${s.input} ${errorStart()}`} type='number' value={props.currentStartValue}
                       onChange={onChangeStart}/>
            </label>
        </div>
    )
}