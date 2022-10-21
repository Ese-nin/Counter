export type InitStateType = {
    minValue: string
    maxValue: string
    count: number
    errorCount: string
    warning: string
}

type ActionsType = ReturnType<typeof increaseCountAC>
    | ReturnType<typeof changeMinValueAC>
    | ReturnType<typeof changeMaxValueAC>
    | ReturnType<typeof changeErrorCountAC>
    | ReturnType<typeof changeWarningAC>
    | ReturnType<typeof resetCountAC>

const initState = {
    minValue: "0",
    maxValue: "5",
    count: 0,
    errorCount: '',
    warning: ''
}

export const counterReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case 'INCREASE_COUNT':
            return {
                ...state,
                count: state.count + 1
            }
        case 'CHANGE_MIN_VALUE':
            return {
                ...state,
                minValue: action.payload.newValue
            }
        case 'CHANGE_MAX_VALUE':
            return {
                ...state,
                maxValue: action.payload.newValue
            }
        case 'CHANGE_ERROR_COUNT':
            return {
                ...state,
                errorCount: action.payload.newValue
            }
        case "CHANGE_WARNING":
            return {
                ...state,
                warning: action.payload.newValue
            }
        case "RESET_COUNT":
            return {
                ...state,
                count: action.payload.newCount
            }
        default:
            return state
    }
}


export const increaseCountAC = () => {
    return {
        type: 'INCREASE_COUNT',
    } as const
}
export const resetCountAC = (newCount: number) => {
    return {
        type: 'RESET_COUNT',
        payload: {
            newCount
        }
    } as const
}
export const changeMinValueAC = (newValue: string) => {
    return {
        type: 'CHANGE_MIN_VALUE',
        payload: {
            newValue
        }
    } as const
}
export const changeMaxValueAC = (newValue: string) => {
    return {
        type: 'CHANGE_MAX_VALUE',
        payload: {
            newValue
        }
    } as const
}
export const changeErrorCountAC = (newValue: string) => {
    return {
        type: 'CHANGE_ERROR_COUNT',
        payload: {
            newValue
        }
    } as const
}
export const changeWarningAC = (newValue: string) => {
    return {
        type: 'CHANGE_WARNING',
        payload: {
            newValue
        }
    } as const
}
