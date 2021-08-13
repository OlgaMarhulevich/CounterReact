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

    useEffect(() => {
        const startValueFromStorage = localStorage.getItem('start value')
        const maxValueFromStorage = localStorage.getItem('max value')
        if (startValueFromStorage && maxValueFromStorage) {
            setStartValue(JSON.parse(startValueFromStorage))
            setCurrentStartValue(JSON.parse(startValueFromStorage))
            setMaxValue(JSON.parse(maxValueFromStorage))
            setCurrenMaxValue(JSON.parse(maxValueFromStorage))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('start value', JSON.stringify(startValue))
        localStorage.setItem('max value', JSON.stringify(maxValue))
    }, [startValue, maxValue])

    useEffect(() => { setCounter(startValue)
    }, [startValue])

    const onClickSet = () => {
        setStartValue(currentStartValue)
        setMaxValue(currenMaxValue)
    }

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

    const valuesAreSet = currentStartValue === startValue && currenMaxValue === maxValue

    const error = (currentStartValue < 0 || currentStartValue >= currenMaxValue) ? 'Incorrect values!' : ''

        return (
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
                        onClickCallback={onClickSet}
                        disabled={valuesAreSet}/>
                </div>
            </div>

            <div className={'counter'}>
                <Display
                    counter={counter}
                    disabled={!valuesAreSet}
                    red={counter === maxValue}
                    error={error}/>

                <div className={'buttons'}>
                    <Button
                        title={'inc'}
                        onClickCallback={onClickInc}
                        disabled={!valuesAreSet || counter === maxValue}/>

                    <Button
                        title={'reset'}
                        onClickCallback={onClickReset}
                        disabled={!valuesAreSet || counter === startValue}/>
                </div>
            </div>
        </div>
    );
}

export default App;
