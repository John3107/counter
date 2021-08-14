import React, {useState} from 'react';
import s from './App.module.css'
import Counter from "./components/Counter/Counter";
import {CounterSetter} from "./components/CounterSetter/CounterSetter";

function App() {

    const [disValueSet, setDisValueSet] = useState(false)
    const [maxValue, setMaxValue] = useState(setMaxValueFromLocalStorage)
    const [minValue, setMinValue] = useState(setMinValueFromLocalStorage)
    let [score, setScore] = useState(minValue);



    const disInc = score === maxValue
    const disReset = score === minValue


    function setMaxValueFromLocalStorage() {
        let valueAsString = localStorage.getItem('counterMaxValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            return newValue
        }
    }


    function setMinValueFromLocalStorage() {
        let valueAsString = localStorage.getItem('counterMinValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            return newValue
        }
    }

    return (
        <div className={s.counterTable}>
            <div>
                <Counter score={score}
                         setScore={setScore}
                         maxValue={maxValue}
                         minValue={minValue}
                         disInc={disInc}
                         disReset={disReset}
                />
            </div>
            <div className={s.counterSetter}>
                <CounterSetter maxValue={maxValue}
                               setMaxValue={setMaxValue}
                               minValue={minValue}
                               setMinValue={setMinValue}
                               disValueSet={disValueSet}
                               setDisValueSet={setDisValueSet}
                               score={score}
                               setScore={setScore}

                />
            </div>
        </div>
    );
}

export default App;
