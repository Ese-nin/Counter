import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import SettingWindow from "./components/SettingWindow";

function App() {


    let stringMin = localStorage.getItem("minValue");
    let currentMin = stringMin ? JSON.parse(stringMin) : 0;

    let stringMax = localStorage.getItem("maxValue");
    let currentMax = stringMax ? JSON.parse(stringMax) : 5;


    const [minValue, setMinValue] = useState(currentMin);
    const [maxValue, setMaxValue] = useState(currentMax);

    const [count, setCount] = useState(minValue);
    const [error, setError] = useState(false);


    useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(count))
    }, [count])

    useEffect(() => {
        localStorage.setItem("minValue", JSON.stringify(minValue))
    }, [minValue])

    useEffect(() => {
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
    }, [maxValue])


    const tap = () => {
        const currentCount = count + 1
        setCount(currentCount)
        if (count === maxValue - 1) setError(true)
    }

    const zero = () => {
        setCount(minValue)
        setError(false)
    }

    const setValue = (newMinValue: number, newMaxValue: number) => {
        setError(false);
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
                tap={tap}
                zero={zero}/>
        </div>
    );
}

export default App;
