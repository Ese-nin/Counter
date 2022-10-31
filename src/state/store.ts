import {combineReducers, legacy_createStore as createStore} from "redux";
import {counterReducer} from "./counterReducer";

const rootReducer = combineReducers({
    counter: counterReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

/*const preloadedState = {
    counter: {
        minValue: '0',
        maxValue: loadState('maxValue') ? loadState() : '5',
        count: 0,
        errorCount: '',
        warning: ''
    }
}*/

export const store = createStore(rootReducer/*, preloadedState*/)