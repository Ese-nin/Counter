import {combineReducers, legacy_createStore as createStore} from "redux";
import {counterReducer} from "./reducers/counterReducer";
import {loadState, saveState} from "./localStorage";
import {throttle} from "lodash";

const rootReducer = combineReducers({
    counter: counterReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, loadState());


store.subscribe(throttle(() => {
    saveState(
        store.getState().counter
    );
}, 1000));
