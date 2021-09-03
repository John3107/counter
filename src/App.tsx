import React, {useEffect} from 'react';
import s from './App.module.css'
import Counter from "./components/Counter/Counter";
import {CounterSetter} from "./components/CounterSetter/CounterSetter";
import {useDispatch} from "react-redux";
import {
    getMaxValueFromLSTC, getMinValueFromLSTC,
} from "./bll/counterSetter-reducrer";
import {onOffAC} from "./bll/counter-reducer";

function App() {

    const dispatch = useDispatch()


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
                <Counter/>
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
