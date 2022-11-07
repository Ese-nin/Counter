import {combineReducers, legacy_createStore as createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {loadState, saveState} from "./localStorage";
import {throttle} from "lodash";

const rootReducer = combineReducers({
    counter: counterReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

const preloadedState = loadState()

export const store = createStore(rootReducer, preloadedState);


store.subscribe(throttle(() => {
    saveState(
        store.getState().counter
    );
}, 1000));
