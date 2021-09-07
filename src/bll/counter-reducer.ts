export type InitialStateFromCounterType = typeof InitialState

type ScoreACType = ReturnType<typeof scoreAC>
type MessageACType = ReturnType<typeof messageAC>
type onFocusHandlerACType = ReturnType<typeof onFocusHandlerAC>
type disIncACType = ReturnType<typeof disIncAC>
type disResACType = ReturnType<typeof disResAC>
type styleMessageACType = ReturnType<typeof styleMessageAC>

type ActionType = ScoreACType | MessageACType
    | onFocusHandlerACType | disIncACType
    | disResACType | styleMessageACType;

const InitialState = {
    message: '',
    score: 0,
    onFocusHandler: false,
    disInc: false,
    disRes: false,
    styleMessage: ''
}

export const counterReducer = (state: InitialStateFromCounterType = InitialState, action: ActionType):
    InitialStateFromCounterType => {
    switch (action.type) {
        case 'SCORE':
            return {
                ...state, score: action.score
            }
        case 'MESSAGE':
            return {
                ...state, message: action.message
            }
        case 'ON-FOCUS-HANDLER':
            return {
                ...state, onFocusHandler: action.onFocusHandler
            }
        case 'DISABLE-INC':
            return {
                ...state, disInc: action.disInc
            }
        case 'DISABLE-RES':
            return {
                ...state, disRes: action.disRes
            }
        case 'STYLE-MESSAGE':
            return {
                ...state, styleMessage: action.styleMessage
            }
        default:
            return state
    }
}

export const scoreAC = (score: number) => ({type: 'SCORE', score} as const)
export const messageAC = (message: string) => ({type: 'MESSAGE', message} as const)
export const onFocusHandlerAC = (onOff: boolean) => ({type: 'ON-FOCUS-HANDLER', onFocusHandler: onOff} as const)
export const disIncAC = (disInc: boolean) => ({type: 'DISABLE-INC', disInc} as const)
export const disResAC = (disRes: boolean) => ({type: 'DISABLE-RES', disRes} as const)
export const styleMessageAC = (styleMessage: string) => ({type: 'STYLE-MESSAGE', styleMessage} as const)