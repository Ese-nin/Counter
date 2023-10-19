import React, {useCallback} from 'react';
import Button from "../Button/Button";
import Display from "../Display/Display";
import s from "./Counter.module.css"
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../state/store";
import {increaseCountAC, resetCountAC} from "../../state/reducers/counterReducer";

type CounterPropsType = {
    minValue: string
    maxValue: string
    settingHandler: () => void
}

const Counter = React.memo((props: CounterPropsType) => {

    const count = useSelector<RootStateType, number>(state => state.counter.count)

    const dispatch = useDispatch()


    const inc = useCallback(() => {
        dispatch(increaseCountAC())
    }, [])

    const reset = useCallback(() => {
        dispatch(resetCountAC())
    }, [])

    return (
        <div className={s.container}>
            <div className={s.counter}>

                <div className={count >= +props.maxValue ? s.errorCount : s.display}>
                    <Display count={count}/>
                </div>

                <div className={s.buttons}>

                    <Button
                        disable={count >= +props.maxValue ? "disable" : ""}
                        name="+"
                        callBack={inc}/>

                    <Button
                        disable={count === +props.minValue ? "disable" : ""}
                        name="reset"
                        callBack={reset}/>

                    <Button
                        name="set"
                        callBack={props.settingHandler}/>

                </div>

            </div>
        </div>
    );
});

export default Counter;