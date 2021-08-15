import React, {ChangeEvent} from 'react';
import {Buttons} from '../Button/Button';
import s from './../../App.module.css'

type CounterSetterPropsType = {
    maxValue: string
    setMaxValue: (maxValue: string) => void
    minValue: string
    setMinValue: (minValue: string) => void
    disValueSet: boolean
    setDisValueSet: (valueSet: boolean) => void
    score: number
    setScore: (score: number) => void
    enterMessage: string
    setEnterMessage: (enterMessage: string) => void
    onFocusMessage: () => void
    onBlurMessage: () => void
}

export function CounterSetter(props: CounterSetterPropsType) {


    const minInputStyle = (JSON.parse(props.minValue)) <= -1 ||
    props.maxValue <= props.minValue
        ? s.startValueErrorInput
        : s.startValueInput

    const equalValueInputStyle = props.maxValue <= props.minValue
        ? s.errorMaxValue : s.maxValue

    const setToLocalStorageMaxValueHandler = () => {
        localStorage.setItem('counterMaxValue', props.maxValue)
    }

    const setToLocalStorageMinValueHandler = () => {
        localStorage.setItem('counterMinValue', props.minValue)
    }


    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(JSON.parse(e.currentTarget.value))
        props.setDisValueSet(false)
        if (JSON.parse(e.currentTarget.value) <= props.minValue) {
            props.setDisValueSet(true)
        }
    }

    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMinValue(JSON.parse(e.currentTarget.value))
        props.setDisValueSet(false)
        if (JSON.parse(e.currentTarget.value) <= -1) {
            props.setDisValueSet(true)
            props.setEnterMessage('Incorrect value!')
        }
        if (JSON.parse(e.currentTarget.value) >= props.maxValue) {
            props.setDisValueSet(true)
        }
    }


    function setToLocalStorageHandler() {
        setToLocalStorageMaxValueHandler();
        setToLocalStorageMinValueHandler();
        props.setDisValueSet(true)
        props.setScore(JSON.parse(props.minValue))
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
                            value={props.maxValue}
                        /></span>
                </div>
                <div>
                    <span className={s.startValue}>min value:<input
                        onFocus={props.onFocusMessage}
                        onBlur={props.onBlurMessage}
                        className={minInputStyle}
                        type={'number'}
                        onChange={onChangeMinValueHandler}
                        value={props.minValue}
                    /></span>
                </div>
            </div>
            <div className={s.Buttons}>
                <div className={s.setButton}>
                    <Buttons
                        setToLocalStorageHandler={setToLocalStorageHandler}
                        disValueSet={props.disValueSet}
                    />
                </div>
            </div>
        </div>
    );

}

