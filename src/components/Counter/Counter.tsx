import React from 'react';
import Button from "../Button/Button";
import Display from "../Display/Display";
import s from "./Counter.module.css"

type CounterPropsType = {
    minValue: number
    error: string
    count: number
    inc: () => void
    reset: () => void
}

const Counter = (props: CounterPropsType) => {

    const {error, count, inc, reset, minValue} = props

    return (
        <div className={s.container}>
            <div className={s.counter}>
                <div className={error ? s.errorCount : s.display}>
                    <Display count={count}/>
                </div>
                <div className={s.buttons}>
                    <Button
                        disable={error}
                        name="+"
                        callBack={inc}/>
                    <Button
                        disable={count === minValue ? "disable" : ""}
                        name="reset"
                        callBack={reset}/>
                </div>
            </div>
        </div>
    );
};

export default Counter;