import React from "react";
import s from './../../App.module.css'

type ButtonsType = {
    score?: number
    incButton?: () => void
    resetButton?: () => void
    setToLocalStorageHandler?: () => void
    disInc?: boolean
    disReset?: boolean
    disValueSet?: boolean
}


export function Buttons(props: ButtonsType) {

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
                        disabled={props.disValueSet}>set
                </button>
            </div>
        </div>
    )
}


