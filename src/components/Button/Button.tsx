import React from "react";
import s from './../../App.module.css'

type ButtonsType = {
    onClickHandler?: () => void
    disabled?: boolean
    title: string
    setToLocalStorageHandler?: () => void
}


export function Button(props: ButtonsType) {

    return (
        <div>
            <div>
                <button className={s.Res}
                onClick={props.onClickHandler}
                disabled={props.disabled}
                >{props.title}</button>
            </div>
        </div>
    )
}


//---------------------------------------------------------------------
/*
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
</div>*/
