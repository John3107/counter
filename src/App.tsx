import React, {useEffect, useState} from 'react';
import s from './App.module.css'
import Counter from "./components/Counter/Counter";
import {CounterSetter} from "./components/CounterSetter/CounterSetter";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./bll/store";
import {
    getMaxValueFromLSTC, getMinValueFromLSTC,
} from "./bll/counterSetter-reducrer";
import {onOffAC} from "./bll/counter-reducer";

function App() {

    const minValue = useSelector<AppRootStateType, number>(state => state.counterSetter.minValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counterSetter.maxValue)
    const score = useSelector<AppRootStateType, number>(state => state.counter.score)


    const dispatch = useDispatch()


    const disInc = score === maxValue
    const disReset = score === minValue


    useEffect(() => {
        dispatch(getMaxValueFromLSTC())
    }, [])

    useEffect(() => {
        dispatch(getMinValueFromLSTC())
    }, [])


    const onFocusMessage = () => {
        dispatch(onOffAC(true))
    }

    const onBlurMessage = () => {
        dispatch(onOffAC(false))
    }

    return (
        <div className={s.counterTable}>
            <div>
                <Counter disInc={disInc}
                         disReset={disReset}
                />
            </div>
            <div className={s.counterSetter}>
                <CounterSetter onBlurMessage={onBlurMessage}
                               onFocusMessage={onFocusMessage}
                />
            </div>
        </div>
    );
}

export default App;
