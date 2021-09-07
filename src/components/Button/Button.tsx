import React from "react";
import s from './../../App.module.css'

type ButtonsType = {
    onClickHandler?: () => void
    disabled?: boolean
    title: string
}


export function Button(props: ButtonsType) {

    return (
        <div>
            <div>
                <button className={s.button}
                        onClick={props.onClickHandler}
                        disabled={props.disabled}
                >{props.title}</button>
            </div>
        </div>
    )
}
