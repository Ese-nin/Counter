import React, {useCallback, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import SettingWindow from "./components/SettingWindow/SettingWindow";
import {useSelector} from "react-redux";
import {RootStateType} from "./state/store";


function App() {

    const minValue = useSelector<RootStateType, string>(state => state.counter.minValue)
    const maxValue = useSelector<RootStateType, string>(state => state.counter.maxValue)

    const [settingMode, setSettingMode] = useState(false)

    const settingHandler = useCallback(() => {
        setSettingMode(prev => !prev)
    }, [])

    const resultWindow = settingMode ?
        <SettingWindow minValue={minValue}
                       maxValue={maxValue}
                       settingHandler={settingHandler}/> :
        <Counter minValue={minValue}
                 maxValue={maxValue}
                 settingHandler={settingHandler}/>

    return (
        <div className="App">

            {resultWindow}

            {/*<SettingWindow minValue={minValue}*/}
            {/*               maxValue={maxValue}/>*/}

            {/*<Counter minValue={minValue}*/}
            {/*         maxValue={maxValue}/>*/}
        </div>
    );
}

export default App;
