import React from 'react';
import s from './Settings.module.css'

type SettingsPropsType = {
    setCurrenMaxValue: (value: number) => void
    setCurrentStartValue: (value: number) => void
    currenMaxValue: number
    currentStartValue: number
    error: boolean
}

export const Settings = (props: SettingsPropsType) => {



    return (
        <div className={s.display}>
            <label className={s.label}> max value:
                <input className={`${s.input} ${props.error ? s.error : ''}`} type='number' value={props.currenMaxValue}
                       onChange={(e) => props.setCurrenMaxValue(e.currentTarget.valueAsNumber)}/>
            </label>
            <label className={s.label}> start value:
                <input className={`${s.input} ${props.error ? s.error : ''}`} type='number' value={props.currentStartValue}
                       onChange={(e) => props.setCurrentStartValue(+e.currentTarget.value)}/>
            </label>
        </div>
    )
}