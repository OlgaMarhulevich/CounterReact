import React, {useState, useEffect} from 'react';
import './App.css';
import {Display} from "./Display/Display";
import {Button} from "./Button/Button";
import {Settings} from './Settings/Settings';

function App() {

    let [startValue, setStartValue] = useState(0);
    let [maxValue, setMaxValue] = useState(5);

    let [counter, setCounter] = useState(startValue);

    let [currentStartValue, setCurrentStartValue] = useState(startValue);
    let [currenMaxValue, setCurrenMaxValue] = useState(maxValue);

    let [message, setMessage] = useState(false)
    let [error, setError] = useState(false)
    let [disabled, setDisabled] = useState(true)

    useEffect(() => {
        const startValueFromStorage = localStorage.getItem('start value')
        const maxValueFromStorage = localStorage.getItem('max value')
        if (startValueFromStorage) {
            setStartValue(JSON.parse(startValueFromStorage))
            setCurrentStartValue(JSON.parse(startValueFromStorage))
        }
        if (maxValueFromStorage) {
            setMaxValue(JSON.parse(maxValueFromStorage))
            setCurrenMaxValue(JSON.parse(maxValueFromStorage))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('start value', JSON.stringify(startValue))
        localStorage.setItem('max value', JSON.stringify(maxValue))
    }, [startValue, maxValue])

    const onClickInc = () => {
        const inc = counter + 1;
        if (inc <= maxValue && inc > startValue) {
            setCounter(inc);
        } else if (inc > maxValue) {
            setCounter(counter);
        }
    }

    const onClickReset = () => {
        setCounter(startValue)
    }

    useEffect(() => {
        setCounter(startValue)
    }, [startValue])

    const onClickSet = () => {
        setStartValue(currentStartValue)
        setMaxValue(currenMaxValue)
        setMessage(false)
        setDisabled(true)
    }

    return (
        <div className={'wrapper'}>
            <div className={'counter'}>
                <Settings
                    setMessage={setMessage}
                    currentStartValue={currentStartValue}
                    currenMaxValue={currenMaxValue}
                    setCurrenMaxValue={setCurrenMaxValue}
                    setCurrentStartValue={setCurrentStartValue}
                    setError={setError}
                    setDisabled={setDisabled}/>

                <div className={'buttons'}>
                    <Button
                        currentStartValue={currentStartValue}
                        currenMaxValue={currenMaxValue}
                        title={'set'}
                        onClickCallback={onClickSet}
                        error={error}
                        disabled={disabled}/>
                </div>
            </div>

            <div className={'counter'}>
                <Display
                    message={message}
                    startValue={startValue}
                    maxValue={maxValue}
                    counter={counter}
                    error={error}/>

                <div className={'buttons'}>
                    <Button
                        startValue={startValue}
                        maxValue={maxValue}
                        counter={counter}
                        title={'inc'}
                        onClickCallback={onClickInc}
                        error={error}/>

                    <Button
                        startValue={startValue}
                        maxValue={maxValue}
                        counter={counter}
                        title={'reset'}
                        onClickCallback={onClickReset}
                        error={error}/>
                </div>
            </div>
        </div>
    );
}

export default App;
