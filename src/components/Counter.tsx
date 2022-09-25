import React from 'react';
import Button from "./Button";
import Display from "./Display";
import s from "./Counter.module.css"

type CounterPropsType = {
    minValue: number
    error: boolean
    count: number
    tap: () => void
    zero: () => void
}

const Counter = (props: CounterPropsType) => {

    const {error, count, tap, zero, minValue} = props

    return (
        <div className={s.container}>
            <div className={s.counter}>
                <div className={error ? s.errorCount : s.display}>
                    <Display count={count}/>
                </div>
                <div className={s.buttons}>
                    <Button
                        disable={error}
                        name="tap"
                        callBack={tap}/>
                    <Button
                        disable={count === minValue}
                        name="reset"
                        callBack={zero}/>
                </div>
            </div>
        </div>
    );
};

export default Counter;