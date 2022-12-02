import React from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import SettingWindow from "./components/SettingWindow/SettingWindow";
import {useSelector} from "react-redux";
import {RootStateType} from "./state/store";


function App() {

    const minValue = useSelector<RootStateType, string>(state => state.counter.minValue)
    const maxValue = useSelector<RootStateType, string>(state => state.counter.maxValue)

    return (
        <div className="App">

            <SettingWindow minValue={minValue}
                           maxValue={maxValue}/>

            <Counter minValue={minValue}
                     maxValue={maxValue}/>
        </div>
    );
}

export default App;
