import React, {useEffect, useState} from 'react';
import './App.css';
import {Display} from "./Display/Display";
import {Button} from "./Button/Button";
import {Settings} from './Settings/Settings';
import {useDispatch, useSelector} from "react-redux";
import {
    getValuesThunkCreator,
    incValueAC,
    resetValueAC,
    setValuesThunkCreator
} from "./redux/counterReducer";
import {AppStateType} from "./redux/store";

function App() {

    //useSelectors
    const counter = useSelector<AppStateType, number>(state => state.counter.counter)
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    //useDispatch
    const dispatch = useDispatch()
    //useState
    let [currentStartValue, setCurrentStartValue] = useState(startValue);
    let [currenMaxValue, setCurrenMaxValue] = useState(maxValue);
    //useEffect
    useEffect(() => {
        dispatch(getValuesThunkCreator())
    }, [])
    useEffect(() => {
        setCurrentStartValue(startValue)
        setCurrenMaxValue(maxValue)
    }, [startValue, maxValue])

    //onClickHandlers
    const incHandler = () => {
        dispatch(incValueAC())
    }
    const setHandler = () => {
        dispatch(setValuesThunkCreator(currentStartValue, currenMaxValue))
    }
    const resetHandler = () => {
        dispatch(resetValueAC())
    }

    const valuesAreSet = currentStartValue === startValue && currenMaxValue === maxValue
    const error = (currentStartValue < 0 || currentStartValue >= currenMaxValue)

    return (<>
            <div className={'wrapper'}>
                <div className={'counter'}>
                    <Settings
                        currentStartValue={currentStartValue}
                        currenMaxValue={currenMaxValue}
                        setCurrenMaxValue={setCurrenMaxValue}
                        setCurrentStartValue={setCurrentStartValue}
                        error={error}
                    />

                    <div className={'buttons'}>
                        <Button
                            title={'set'}
                            onClickCallback={setHandler}
                            disabled={valuesAreSet || error}/>
                    </div>
                </div>

                <div className={'counter'}>
                    <Display
                        counter={counter}
                        disabled={!valuesAreSet}
                        maxValue={maxValue}
                        error={error}/>

                    <div className={'buttons'}>
                        <Button
                            title={'inc'}
                            onClickCallback={incHandler}
                            disabled={!valuesAreSet || counter === maxValue || error}/>

                        <Button
                            title={'reset'}
                            onClickCallback={resetHandler}
                            disabled={!valuesAreSet || counter === startValue || error}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;
