import React, {ChangeEvent, useState} from 'react';
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
}

export function CounterSetter(props: CounterSetterPropsType) {


    const minInputStyle = (JSON.parse(props.minValue)) <= -1
        ? s.startValueErrorInput
        : s.startValueInput

    const equalValueInputStyle = props.maxValue === props.minValue
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
    }

    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMinValue(JSON.parse(e.currentTarget.value))
        props.setDisValueSet(false)
        if (JSON.parse(e.currentTarget.value) <= -1) {
            props.setDisValueSet(true)
        }
        if(JSON.parse(e.currentTarget.value) === props.maxValue) {
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
                <div className={s.maxValue}>
                        <span>max value:<input className={s.errorMaxValue}
                                               type={'number'}
                                               onChange={onChangeMaxValueHandler}
                                               value={props.maxValue}
                        /></span>
                </div>
                <div>
                    <span className={s.startValue}>min value:<input
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

