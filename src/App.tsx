import React from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import SettingWindow from "./components/SettingWindow/SettingWindow";


function App() {
    return (
        <div className="App">

            <SettingWindow />

            <Counter />
        </div>
    );
}

export default App;
