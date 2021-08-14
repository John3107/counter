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
}

function Counter(props: CounterPropsType) {

    const messageWithError = props.minValue <= -1
        ? 'Incorrect value!'
        : props.score

    const scoreColor = props.disInc
        ? s.ScoreboardRed
        : s.ScoreboardBlack

    const styleWithErrorMessage = props.minValue <= -1
        ? s.errorText
        : s.totalScore

    const incButton = () => {
        props.setScore(props.score + 1)
    }

    const resetButton = () => {
        props.setScore(props.minValue)
    }


    return (
        <div className={s.Counter}>
            <div className={scoreColor}>
                <span className={styleWithErrorMessage}>{messageWithError}</span>
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
