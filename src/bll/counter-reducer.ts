export type InitialStateFromCounterType = typeof InitialState;

type ScoreACType = ReturnType<typeof scoreAC>
type MessageACType = ReturnType<typeof messageAC>
type OnOffACACType = ReturnType<typeof onOffAC>

type ActionType = ScoreACType | MessageACType
    | OnOffACACType;

const InitialState = {
    score: 0,
    message: '',
    onOff: true
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
        default:
            return state
    }
}

export const scoreAC = (score: number) => ({type: 'SCORE', score} as const)
export const messageAC = (message: string) => ({type: 'MESSAGE', message} as const)
export const onOffAC = (onOff: boolean) => ({type: 'ON-OFF', onOff} as const)
