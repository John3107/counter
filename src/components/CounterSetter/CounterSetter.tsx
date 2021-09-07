import React, {ChangeEvent} from 'react';
import {Button} from '../Button/Button';
import s from './../../App.module.css'
import {useDispatch, useSelector} from "react-redux";
import {
    disValueAC,
    setMaxValueToLSTC,
    setMinValueToLSTC
} from "../../bll/counterSetter-reducrer";
import {AppRootStateType} from "../../bll/store";
import {disIncAC, disResAC, messageAC, onFocusHandlerAC, scoreAC, styleMessageAC} from "../../bll/counter-reducer";


export function CounterSetter() {

    const dispatch = useDispatch()

    const minValue = useSelector<AppRootStateType, number>(state => state.counterSetter.minValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counterSetter.maxValue)
    const disable = useSelector<AppRootStateType, boolean>(state => state.counterSetter.disable)


    const onFocusMessage = () => {
        dispatch(onFocusHandlerAC(true))
        dispatch(disIncAC(true))
        dispatch(disResAC(true))
    }

    const onBlurMessage = () => {
        dispatch(onFocusHandlerAC(false))
        dispatch(styleMessageAC(s.totalScore))
        dispatch(scoreAC(minValue))
        dispatch(disIncAC(true))
        dispatch(disResAC(true))
    }

    const minInputStyle = minValue <= -1 ||
    maxValue <= minValue
        ? s.startValueErrorInput
        : s.startValueInput

    const equalValueInputStyle = maxValue <= minValue || maxValue <= -1
        ? s.errorMaxValue : s.maxValue

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueToLSTC(JSON.parse(e.currentTarget.value)))
        dispatch(disValueAC(false))
        if (JSON.parse(e.currentTarget.value) <= minValue) {
            dispatch(disIncAC(true))
            dispatch(disResAC(true))
            dispatch(disValueAC(true))
        }
        if (JSON.parse(e.currentTarget.value) <= -1 || minValue <= -1) {
            dispatch(disIncAC(true))
            dispatch(disResAC(true))
            dispatch(disValueAC(true))
        }
    }

    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMinValueToLSTC(JSON.parse(e.currentTarget.value)))
        dispatch(disValueAC(false))
        if (JSON.parse(e.currentTarget.value) <= -1) {
            dispatch(disIncAC(true))
            dispatch(disResAC(true))
            dispatch(disValueAC(true))
            dispatch(messageAC('Incorrect value!'))
        }
        if (JSON.parse(e.currentTarget.value) >= maxValue) {
            dispatch(disIncAC(true))
            dispatch(disResAC(true))
            dispatch(disValueAC(true))
        }
    }


    function setHandler() {
        dispatch(disValueAC(true))
        dispatch(scoreAC(minValue))
        dispatch(disIncAC(false))
        dispatch(disResAC(false))
        dispatch(styleMessageAC(s.totalScore))
    }


    return (
        <div className={s.CounterSetter}>
            <div className={s.Scoreboard}>
                <div>
                        <span className={equalValueInputStyle}>max value:<input
                            onFocus={onFocusMessage}
                            onBlur={onBlurMessage}
                            type={'number'}
                            onChange={onChangeMaxValueHandler}
                            value={maxValue}
                        /></span>
                </div>
                <div>
                    <span className={s.startValue}>min value:<input
                        onFocus={onFocusMessage}
                        onBlur={onBlurMessage}
                        className={minInputStyle}
                        type={'number'}
                        onChange={onChangeMinValueHandler}
                        value={minValue}
                    /></span>
                    <div className={s.ButtonSet}>
                        <div className={s.ButtonsContainer}>
                            <Button
                                title={'set'}
                                onClickHandler={setHandler}
                                disabled={disable}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}


