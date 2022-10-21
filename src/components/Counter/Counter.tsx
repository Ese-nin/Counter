import React from 'react';
import Button from "../Button/Button";
import Display from "../Display/Display";
import s from "./Counter.module.css"
import {useSelector} from "react-redux";
import {RootStateType} from "../../state/store";
import {InitStateType} from "../../state/counterReducer";

type CounterPropsType = {
    inc: () => void
    reset: () => void
}

const Counter = (props: CounterPropsType) => {

    const state = useSelector<RootStateType, InitStateType>(state => state.counter)

    const {inc, reset} = props

    return (
        <div className={s.container}>
            <div className={s.counter}>
                <div className={state.count === +state.maxValue ? s.errorCount : s.display}>
                    <Display count={state.count}/>
                </div>
                <div className={s.buttons}>
                    <Button
                        disable={state.errorCount}
                        name="+"
                        callBack={inc}/>
                    <Button
                        disable={state.count === +state.minValue ? "disable" : ""}
                        name="reset"
                        callBack={reset}/>
                </div>
            </div>
        </div>
    );
};

export default Counter;