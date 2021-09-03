export type InitialStateFromCounterType = typeof InitialState;

type ScoreACType = ReturnType<typeof scoreAC>
type MessageACType = ReturnType<typeof messageAC>
type OnOffACACType = ReturnType<typeof onOffAC>
type disIncACType = ReturnType<typeof disIncAC>
type disResACType = ReturnType<typeof disResAC>

type ActionType = ScoreACType | MessageACType
    | OnOffACACType | disIncACType
    | disResACType;

const InitialState = {
    score: 0,
    message: '',
    onOff: false,
    disInc: false,
    disRes: false,
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
            case 'ON-OFF':
            return {
                ...state, onOff: action.onOff
            }
        case 'DISABLE-INC':
            return {
                ...state, disInc: action.disInc
            }
        case 'DISABLE-RES':
            return {
                ...state, disRes: action.disRes
            }
        default:
            return state
    }
}

export const scoreAC = (score: number) => ({type: 'SCORE', score} as const)
export const messageAC = (message: string) => ({type: 'MESSAGE', message} as const)
export const onOffAC = (onOff: boolean) => ({type: 'ON-OFF', onOff} as const)
export const disIncAC = (disInc: boolean) => ({type: 'DISABLE-INC', disInc} as const)
export const disResAC = (disRes: boolean) => ({type: 'DISABLE-RES', disRes} as const)