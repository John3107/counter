import React from "react";
import s from './../../App.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";

type ButtonsType = {
    incButton?: () => void
    resetButton?: () => void
    setToLocalStorageHandler?: () => void
    disInc?: boolean
    disReset?: boolean
}


export function Buttons(props: ButtonsType) {
    const disable = useSelector<AppRootStateType, boolean>(state => state.counterSetter.disable)

    return (
        <div>
            <div>
                <button className={s.Inc}
                        onClick={props.incButton}
                        disabled={props.disInc}>inc
                </button>
            </div>
            <div>
                <button className={s.Res}
                        onClick={props.resetButton}
                        disabled={props.disReset}>reset
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


