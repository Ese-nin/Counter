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
        case 'CHANGE_MAX_VALUE':
        case 'CHANGE_ERROR_COUNT':
        case "CHANGE_WARNING":
            return {
                ...state,
                ...action.payload
            }
        /*case 'CHANGE_MAX_VALUE':
            return {
                ...state,
                maxValue: action.payload.maxValue
            }*/
        /*case 'CHANGE_ERROR_COUNT':
            return {
                ...state,
                errorCount: action.payload.errorCount
            }*/
        /*case "CHANGE_WARNING":
            return {
                ...state,
                warning: action.payload.warning
            }*/
        case "RESET_COUNT":
            return {
                ...state,
                count: +state.minValue
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
export const resetCountAC = () => {
    return {
        type: 'RESET_COUNT',
        payload: {}
    } as const
}
export const changeMinValueAC = (newMinValue: string) => {
    return {
        type: 'CHANGE_MIN_VALUE',
        payload: {
            minValue: newMinValue
        }
    } as const
}
export const changeMaxValueAC = (newMaxValue: string) => {
    return {
        type: 'CHANGE_MAX_VALUE',
        payload: {
            maxValue: newMaxValue
        }
    } as const
}
export const changeErrorCountAC = (newErrorValue: string) => {
    return {
        type: 'CHANGE_ERROR_COUNT',
        payload: {
            errorCount: newErrorValue
        }
    } as const
}
export const changeWarningAC = (newWarning: string) => {
    return {
        type: 'CHANGE_WARNING',
        payload: {
            warning: newWarning
        }
    } as const
}
