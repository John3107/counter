import React, {useEffect} from 'react';
import s from './App.module.css'
import Counter from "./components/Counter/Counter";
import {CounterSetter} from "./components/CounterSetter/CounterSetter";
import {useDispatch} from "react-redux";
import {getMaxValueFromLSTC, getMinValueFromLSTC} from "./bll/counterSetter-reducrer";
import {disIncAC, disResAC, styleMessageAC} from "./bll/counter-reducer";

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMaxValueFromLSTC())
        dispatch(getMinValueFromLSTC())
        dispatch(disIncAC(true))
        dispatch(disResAC(true))
        dispatch(styleMessageAC(s.totalScore))
    }, [])


    return (
        <div className={s.counterTable}>
            <div>
                <Counter/>
            </div>
            <div className={s.counterSetter}>
                <CounterSetter/>
            </div>
        </div>
    );
}

export default App;
