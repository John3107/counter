import React from 'react';
import {Buttons} from '../Button/Button';
import s from './../../App.module.css'



type CounterPropsType = {
    score: number
    setScore: (score: number) => void
    maxValue: number
    minValue: number
    disInc: boolean
    disReset: boolean
    enterMessage: string
    setEnterMessage: (enterMessage: string) => void
    onOff?: boolean
    setOnOff?: (onOff: boolean) => void
}

function Counter(props: CounterPropsType) {


    let styleWithErrorMessage = props.minValue <= -1 ||
    props.maxValue <= props.minValue
        ? s.errorText
        : s.totalScore


    if(props.minValue <= -1 ||
        props.maxValue <= props.minValue) {
        props.setEnterMessage('Incorrect value!')
    } else if(props.onOff) {
        props.setEnterMessage('Choose value and press set!')
        styleWithErrorMessage = s.enterText
    } else if(props.onOff === false) {
        props.setEnterMessage(JSON.stringify(props.score))
    } else {
        props.setEnterMessage(JSON.stringify(props.score))
    }

    const scoreColor = props.disInc
        ? s.ScoreboardRed
        : s.ScoreboardBlack



    const incButton = () => {
        props.setScore(props.score + 1)
    }

    const resetButton = () => {
        props.setScore(props.minValue)
    }



    return (
        <div className={s.Counter}>
            <div className={scoreColor}>
                <span className={styleWithErrorMessage}>
                    {props.enterMessage}</span>
            </div>
            <div className={s.Buttons}>
                <div className={s.incAndResButtons}>
                    <Buttons
                        score={props.score}
                        incButton={incButton}
                        resetButton={resetButton}
                        disInc={props.disInc}
                        disReset={props.disReset}/>
                </div>
            </div>
        </div>
    )
}

export default Counter
