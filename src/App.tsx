import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import SettingWindow from "./components/SettingWindow";

function App() {

    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5);
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
        setMinValue(newMinValue);
        setMaxValue(newMaxValue);
        setCount(newMinValue);
        setError(false);
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
