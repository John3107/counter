import React from "react";
import s from './../../App.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {disIncAC, disResAC} from "../../bll/counter-reducer";

type ButtonsType = {
    incButton?: () => void
    resetButton?: () => void
    setToLocalStorageHandler?: () => void
}


export function Buttons(props: ButtonsType) {
    const dispatch = useDispatch()

    const minValue = useSelector<AppRootStateType, number>(state => state.counterSetter.minValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counterSetter.maxValue)
    const disable = useSelector<AppRootStateType, boolean>(state => state.counterSetter.disable)

    const disInc = useSelector<AppRootStateType, boolean>(state => state.counter.disInc)
    const disRes = useSelector<AppRootStateType, boolean>(state => state.counter.disRes)
    const score = useSelector<AppRootStateType, number>(state => state.counter.score)

/*    const a = () => {
        if (score === maxValue) {
            dispatch(disIncAC(true))
        }
        if (score === minValue) {
            dispatch(disResAC(true))
        }
    }*/

    return (
        <div>
            <div>
                <button className={s.Inc}
                        onClick={props.incButton}
                        disabled={disInc}>inc
                </button>
            </div>
            <div>
                <button className={s.Res}
                        onClick={props.resetButton}
                        disabled={disRes}>reset
                </button>
            </div>
            <div>
                <button className={s.Set}
                        onClick={props.setToLocalStorageHandler}
                        disabled={disable}>set
                </button>
            </div>
        </div>
    )
}


