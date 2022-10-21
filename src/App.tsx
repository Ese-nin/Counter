import React from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import SettingWindow from "./components/SettingWindow/SettingWindow";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./state/store";
import {
    changeErrorCountAC,
    increaseCountAC,
    InitStateType,
    resetCountAC
} from "./state/counterReducer";

function App() {

    // проверка LocalStorage на наличие данных и определение стартовых границ счетчика
    /*let stringMin = localStorage.getItem("minValue");
    let currentMin = stringMin ? +stringMin : 0;

    let stringMax = localStorage.getItem("maxValue");
    let currentMax = stringMax ? +stringMax : 5;*/

    const state = useSelector<RootStateType, InitStateType>(state => state.counter)

    const dispatch = useDispatch()

    /*const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5);

    const [count, setCount] = useState(minValue);
    const [errorCount, setErrorCount] = useState("");*/


    /*useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(count))
    }, [count])

    useEffect(() => {
        localStorage.setItem("minValue", JSON.stringify(minValue))
    }, [minValue])

    useEffect(() => {
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
    }, [maxValue])*/

    // обработка счетчика
    const inc = () => {
        dispatch(increaseCountAC())
    }

    const reset = () => {
        /*setCount(minValue)
        setErrorCount("")*/
        dispatch(resetCountAC(+state.minValue))
        dispatch(changeErrorCountAC(''))
    }

    // обработка окна настроек
    /*const setValue = (newMinValue: number, newMaxValue: number) => {
        dispatch(changeMinValueAC(newMinValue.toString()))
        dispatch(changeMaxValueAC(newMaxValue.toString()))
    }*/

    return (
        <div className="App">

            <SettingWindow/>

            <Counter
                inc={inc}
                reset={reset}/>
        </div>
    );
}

export default App;
