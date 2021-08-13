import React from 'react';
import s from './Settings.module.css'

type SettingsPropsType = {
    setCurrenMaxValue: (value: number) => void
    setCurrentStartValue: (value: number) => void
    currenMaxValue: number
    currentStartValue: number
    error: string
}

export const Settings = (props: SettingsPropsType) => {

    const onChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentMaxValue = +e.currentTarget.value
        props.setCurrenMaxValue(currentMaxValue)
    }
    const onChangeStart = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentStartValue = +e.currentTarget.value
        props.setCurrentStartValue(currentStartValue)
    }

    return (
        <div className={s.display}>
            <label className={s.label}> max value:
                <input className={`${s.input} ${props.error ? s.error : ''}`} type='number' value={props.currenMaxValue}
                       onChange={onChangeMax}/>
            </label>
            <label className={s.label}> start value:
                <input className={`${s.input} ${props.error ? s.error : ''}`} type='number' value={props.currentStartValue}
                       onChange={onChangeStart}/>
            </label>
        </div>
    )
}