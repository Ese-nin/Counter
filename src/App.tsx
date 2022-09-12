import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter";

function App() {

    const [count, setCount] = useState<number>(0)
    const [error, setError] = useState<boolean>(false)

    const tap = () => {
        const currentCount = count + 1
        setCount(currentCount)
        if (count === 4) setError(true)
    }
    const zero = () => {
        setCount(0)
        setError(false)
    }

    return (
        <div className="App">
            <Counter
                count={count}
                error={error}
                tap={tap}
                zero={zero}/>
        </div>
    );
}

export default App;
