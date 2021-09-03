import React, {ChangeEvent} from 'react';
import {Buttons} from '../Button/Button';
import s from './../../App.module.css'
import {useDispatch, useSelector} from "react-redux";
import {disValueAC, setMaxValueToLSTC, setMinValueToLSTC} from "../../bll/counterSetter-reducrer";
import {AppRootStateType} from "../../bll/store";
import {messageAC, scoreAC} from "../../bll/counter-reducer";

type CounterSetterPropsType = {
    onFocusMessage: () => void
    onBlurMessage: () => void
}

export function CounterSetter(props: CounterSetterPropsType) {

    const dispatch = useDispatch()

    const minValue = useSelector<AppRootStateType, number>(state => state.counterSetter.minValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counterSetter.maxValue)

    const minInputStyle = minValue <= -1 ||
    maxValue <= minValue
        ? s.startValueErrorInput
        : s.startValueInput

    const equalValueInputStyle = maxValue <= minValue
        ? s.errorMaxValue : s.maxValue

    const setToLocalStorageMaxValueHandler = () => {
        localStorage.setItem('counterMaxValue', JSON.stringify(maxValue))
    }

    const setToLocalStorageMinValueHandler = () => {
        localStorage.setItem('counterMinValue', JSON.stringify(minValue))
    }


    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueToLSTC(JSON.parse(e.currentTarget.value)))
        dispatch(disValueAC(false))
        if (JSON.parse(e.currentTarget.value) <= minValue) {
            dispatch(disValueAC(true))
        }
    }

    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMinValueToLSTC(JSON.parse(e.currentTarget.value)))
        dispatch(disValueAC(false))
        if (JSON.parse(e.currentTarget.value) <= -1) {
            dispatch(disValueAC(true))
            dispatch(messageAC('Incorrect value!'))
        }
        if (JSON.parse(e.currentTarget.value) >= maxValue) {
            dispatch(disValueAC(true))
        }
    }


    function setToLocalStorageHandler() {
        setToLocalStorageMaxValueHandler();
        setToLocalStorageMinValueHandler();
        dispatch(disValueAC(true))
        dispatch(scoreAC(minValue))
    }





    return (
        <div className={s.CounterSetter}>
            <div className={s.Scoreboard}>
                <div className={equalValueInputStyle}>
                        <span>max value:<input
                            onFocus={props.onFocusMessage}
                            onBlur={props.onBlurMessage}
                            type={'number'}
                            onChange={onChangeMaxValueHandler}
                            value={maxValue}
                        /></span>
                </div>
                <div>
                    <span className={s.startValue}>min value:<input
                        onFocus={props.onFocusMessage}
                        onBlur={props.onBlurMessage}
                        className={minInputStyle}
                        type={'number'}
                        onChange={onChangeMinValueHandler}
                        value={minValue}
                    /></span>
                </div>
            </div>
            <div className={s.Buttons}>
                <div className={s.setButton}>
                    <Buttons
                        setToLocalStorageHandler={setToLocalStorageHandler}
                    />
                </div>
            </div>
        </div>
    );

}

