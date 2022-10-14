import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import SettingWindow from "./components/SettingWindow/SettingWindow";

function App() {

    // проверка LocalStorage на наличие данных и определение стартовых границ счетчика
    let stringMin = localStorage.getItem("minValue");
    let currentMin = stringMin ? +stringMin : 0;

    let stringMax = localStorage.getItem("maxValue");
    let currentMax = stringMax ? +stringMax : 5;


    const [minValue, setMinValue] = useState(currentMin);
    const [maxValue, setMaxValue] = useState(currentMax);

    const [count, setCount] = useState(minValue);
    const [error, setError] = useState("");


    useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(count))
    }, [count])

    useEffect(() => {
        localStorage.setItem("minValue", JSON.stringify(minValue))
    }, [minValue])

    useEffect(() => {
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
    }, [maxValue])

    // обработка счетчика
    const inc = () => {
        const currentCount = count + 1
        setCount(currentCount)
        if (count === maxValue - 1) setError("error")
    }

    const reset = () => {
        setCount(minValue)
        setError("")
    }

    // обработка окна настроек
    const setValue = (newMinValue: number, newMaxValue: number) => {
        setError("");
        setMinValue(newMinValue);
        setMaxValue(newMaxValue);
        setCount(newMinValue);
    }

    return (
        <div className="App">

            <SettingWindow
                minValue={JSON.stringify(minValue)}
                maxValue={JSON.stringify(maxValue)}
                setValue={setValue}/>

            <Counter
                minValue={minValue}
                count={count}
                error={error}
                inc={inc}
                reset={reset}/>
        </div>
    );
}

export default App;
