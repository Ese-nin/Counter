import {
    changeMaxValueAC,
    changeMinValueAC, changeWarningAC,
    counterReducer,
    increaseCountAC, resetCountAC, setSaveValueAC
} from "./counterReducer";

type StartStateType = {
    valueForReset: string
    minValue: string
    maxValue: string
    count: number
        warning: string
}

let startState: StartStateType

beforeEach(() => {
    startState = {
        valueForReset: '0',
        minValue: '0',
        maxValue: '5',
        count: 2,
        warning: ''}
})

test('"count" should be changed', () => {

    const endState = counterReducer(startState, increaseCountAC())

    expect(endState.count).toBe(3)
    expect(startState.count).toBe(2)
})

test('"minValue" should be changed', () => {

    const newValue = '22';

    const endState = counterReducer(startState, changeMinValueAC(newValue))

    expect(endState.minValue).toBe(newValue)
})

test('"maxValue" should be changed', () => {

    const newValue = '22';

    const endState = counterReducer(startState, changeMaxValueAC(newValue))

    expect(endState.maxValue).toBe(newValue)
})

test('"warning" should be changed', () => {

    const newValue = "warning";

    const endState = counterReducer(startState, changeWarningAC(newValue))

    expect(endState.warning).toBe(newValue)
})

test('"count" should be changed to "newCount"', () => {

    const endState = counterReducer(startState, resetCountAC())

    expect(endState.count).toBe(0)
    expect(startState.count).toBe(2)
})

test('"valueForReset" should be equal "minValue"', () => {
    startState.minValue = '3'

    const endState = counterReducer(startState, setSaveValueAC())

    expect(endState.valueForReset).toBe(endState.minValue)
    expect(endState.count).toBe(3)
})