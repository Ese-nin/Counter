import {loadState} from "../localStorage";

export type InitStateType = {
    valueForReset: string
    minValue: string
    maxValue: string
    count: number
    warning: string
}

type ActionsType = ReturnType<typeof increaseCountAC>
    | ReturnType<typeof changeMinValueAC>
    | ReturnType<typeof changeMaxValueAC>
    | ReturnType<typeof changeWarningAC>
    | ReturnType<typeof resetCountAC>
    | ReturnType<typeof setSaveValueAC>

const initState: InitStateType = loadState()
    ? loadState()
    : {
    valueForReset: '0',
    minValue: "0",
    maxValue: "5",
    count: 0,
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
        case "CHANGE_WARNING":
            return {
                ...state,
                ...action.payload
            }
        case "RESET_COUNT":
            return {
                ...state,
                count: +state.valueForReset
            }
        case 'SET_SAVE_VALUE':
            return {
                ...state,
                valueForReset: state.minValue,
                count: +state.minValue
            }
        default:
            return state
    }
}


export const increaseCountAC = () =>
    ({type: 'INCREASE_COUNT'} as const)

export const resetCountAC = () =>
    ({type: 'RESET_COUNT', payload: {}} as const)

export const changeMinValueAC = (newMinValue: string) =>
    ({type: 'CHANGE_MIN_VALUE', payload: {minValue: newMinValue}} as const)

export const changeMaxValueAC = (newMaxValue: string) =>
    ({type: 'CHANGE_MAX_VALUE', payload: {maxValue: newMaxValue}} as const)

export const changeWarningAC = (newWarning: string) =>
    ({type: 'CHANGE_WARNING', payload: {warning: newWarning}} as const)

export const setSaveValueAC = () =>
    ({type: 'SET_SAVE_VALUE', payload: {}} as const)

