import React from 'react';
import {Buttons} from '../Button/Button';
import s from './../../App.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {messageAC, scoreAC} from "../../bll/counter-reducer";



function Counter() {
    const dispatch = useDispatch()

    const minValue = useSelector<AppRootStateType, number>(state => state.counterSetter.minValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counterSetter.maxValue)
    const score = useSelector<AppRootStateType, number>(state => state.counter.score)
    const message = useSelector<AppRootStateType, string>(state => state.counter.message)
    const onOff = useSelector<AppRootStateType, boolean>(state => state.counter.onOff)
    const disInc = useSelector<AppRootStateType, boolean>(state => state.counter.disInc)


    let styleWithErrorMessage = minValue <= -1 ||
    maxValue <= minValue
        ? s.errorText
        : s.totalScore


    if (minValue <= -1 ||
        maxValue <= minValue ||
        maxValue <= -1) {
        dispatch(messageAC('Incorrect value!'))
    } else if (onOff) {
        dispatch(messageAC('Choose value and press set!'))
        styleWithErrorMessage = s.enterText
    } else if (!onOff) {
        dispatch(messageAC(JSON.stringify(score)))
    } else {
        dispatch(messageAC(JSON.stringify(score)))
    }

    const scoreColor = disInc
        ? s.ScoreboardRed
        : s.ScoreboardBlack


    const incButton = () => {
        dispatch(scoreAC(score + 1))
    }

    const resetButton = () => {
        dispatch(scoreAC(minValue))
    }


    return (
        <div className={s.Counter}>
            <div className={scoreColor}>
                <span className={styleWithErrorMessage}>
                    {message}</span>
            </div>
            <div className={s.Buttons}>
                <div className={s.incAndResButtons}>
                    <Buttons
                        incButton={incButton}
                        resetButton={resetButton}
                    />
                </div>
            </div>
        </div>
    )
}

export default Counter
