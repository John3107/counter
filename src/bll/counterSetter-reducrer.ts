import {Dispatch} from "redux";
import {AppRootStateType} from "./store";


export type InitialStateFromCounterSetterType = typeof InitialState;

type SetMaxValueToLSType = ReturnType<typeof setMaxValueToLSAC>
type GetMaxValueFromLSType = ReturnType<typeof getMaxValueFromLSAC>
type SetMinValueToLSType = ReturnType<typeof setMinValueToLSAC>
type GetMinValueFromLSType = ReturnType<typeof getMinValueFromLSAC>
type disValueACType = ReturnType<typeof disValueAC>



type ActionType = SetMaxValueToLSType | GetMaxValueFromLSType
    | SetMinValueToLSType | GetMinValueFromLSType
    | disValueACType;

const InitialState = {
    maxValue: 0,
    minValue: 0,
    disable: false,
}

export const counterSetterReducer = (state: InitialStateFromCounterSetterType = InitialState, action: ActionType):
    InitialStateFromCounterSetterType => {
    switch (action.type) {
        case 'SET-MAX-VALUE-TO-LC':
            return {
                ...state, maxValue: action.maxValue
            }
        case 'GET-MAX-VALUE-FROM-LC':
            return {
                ...state, maxValue: action.maxValue
            }
        case 'SET-MIN-VALUE-TO-LC':
            return {
                ...state, minValue: action.minValue
            }
        case 'GET-MIN-VALUE-FROM-LC':
            return {
                ...state, minValue: action.minValue
            }
            case 'DISABLE':
            return {
                ...state, disable: action.disable
            }
        default:
            return state
    }
}

export const setMaxValueToLSTC = (maxValue: number) => (dispatch: Dispatch, getState: () => AppRootStateType) => {
    let currentValue = getState().counterSetter.maxValue
    let currentTrueValue = currentValue < maxValue ? currentValue + 1 : currentValue - 1
    localStorage.setItem('counterMaxValue', JSON.stringify(currentTrueValue))
    dispatch(setMaxValueToLSAC(maxValue))
}

export const getMaxValueFromLSTC = () => (dispatch: Dispatch) => {
    let valueAsString = localStorage.getItem('counterMaxValue')
    if (valueAsString) {
        let newValue = JSON.parse(valueAsString)
        dispatch(getMaxValueFromLSAC(newValue))
    }
}

export const setMinValueToLSTC = (minValue: number) => (dispatch: Dispatch, getState: () => AppRootStateType) => {
    let currentValue = getState().counterSetter.minValue
    let currentTrueValue = currentValue < minValue ? currentValue + 1 : currentValue - 1
    localStorage.setItem('counterMinValue', JSON.stringify(currentTrueValue))
    dispatch(setMinValueToLSAC(minValue))
}

export const getMinValueFromLSTC = () => (dispatch: Dispatch) => {
    let valueAsString = localStorage.getItem('counterMinValue')
    if (valueAsString) {
        let newValue = JSON.parse(valueAsString)
        dispatch(getMinValueFromLSAC(newValue))
    }
}

export const setMaxValueToLSAC = (maxValue: number) => ({type: 'SET-MAX-VALUE-TO-LC', maxValue} as const)
export const getMaxValueFromLSAC = (maxValue: number) => ({type: 'GET-MAX-VALUE-FROM-LC', maxValue} as const)
export const setMinValueToLSAC = (minValue: number) => ({type: 'SET-MIN-VALUE-TO-LC', minValue} as const)
export const getMinValueFromLSAC = (minValue: number) => ({type: 'GET-MIN-VALUE-FROM-LC', minValue} as const)
export const disValueAC = (disable: boolean) => ({type: 'DISABLE', disable} as const)



