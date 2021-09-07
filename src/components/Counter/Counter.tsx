import React, {useEffect} from 'react';
import {Button} from '../Button/Button';
import s from './../../App.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {
    disIncAC,
    disResAC,
    InitialStateFromCounterType,
    messageAC,
    scoreAC,
    styleMessageAC
} from "../../bll/counter-reducer";


function Counter() {

    const dispatch = useDispatch()

    const minValue = useSelector<AppRootStateType, number>(state => state.counterSetter.minValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counterSetter.maxValue)

    let {score, message, onFocusHandler, disInc, disRes, styleMessage} =
        useSelector<AppRootStateType, InitialStateFromCounterType>(state => state.counter)

    const scoreColor = disInc
        ? s.ScoreboardRed
        : s.ScoreboardBlack


    const incButton = () => {
        dispatch(scoreAC(score + 1))
        if (score + 1 === maxValue) {
            dispatch(disIncAC(true))
            dispatch(styleMessageAC(s.totalScoreError))
        }
        dispatch(disResAC(false))
    }

    const resetButton = () => {
        dispatch(scoreAC(minValue))
        dispatch(disResAC(true))
        dispatch(disIncAC(false))
        dispatch(styleMessageAC(s.totalScore))
    }

    useEffect(() => {
        if (minValue <= -1 ||
            maxValue <= minValue ||
            maxValue <= -1) {
            dispatch(messageAC('Incorrect value!'))
            dispatch(styleMessageAC(s.errorText))
        } else if (onFocusHandler) {
            dispatch(messageAC('Choose value and press set!'))
            dispatch(styleMessageAC(s.enterText))
        } else if (!onFocusHandler) {
            dispatch(messageAC(JSON.stringify(score)))
        } else {
            dispatch(messageAC(JSON.stringify(score)))
        }

    }, [maxValue, minValue, score, onFocusHandler, styleMessage])

    return (
        <div className={s.Counter}>
            <div className={scoreColor}>
                <span className={styleMessage}>
                    {message}</span>
            </div>
            <div className={s.ButtonsIncAndRes}>
                <div className={s.ButtonsContainer}>
                    <div>
                        <Button
                            title={'inc'}
                            onClickHandler={incButton}
                            disabled={disInc}
                        />
                    </div>
                    <div>
                        <Button
                            title={'res'}
                            onClickHandler={resetButton}
                            disabled={disRes}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter
