import React from 'react';
import Button from "../Button/Button";
import Display from "../Display/Display";
import s from "./Counter.module.css"
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../state/store";
import {increaseCountAC, resetCountAC} from "../../state/counterReducer";


const Counter = () => {

    const count = useSelector<RootStateType, number>(state => state.counter.count)
    const minValue = useSelector<RootStateType, string>(state => state.counter.minValue)
    const maxValue = useSelector<RootStateType, string>(state => state.counter.maxValue)

    const dispatch = useDispatch()


    const inc = () => {
        dispatch(increaseCountAC())
    }

    const reset = () => {
        dispatch(resetCountAC())
    }

    return (
        <div className={s.container}>
            <div className={s.counter}>

                <div className={count >= +maxValue ? s.errorCount : s.display}>
                    <Display count={count}/>
                </div>

                <div className={s.buttons}>

                    <Button
                        disable={count >= +maxValue ? "disable" : ""}
                        name="+"
                        callBack={inc}/>

                    <Button
                        disable={count === +minValue ? "disable" : ""}
                        name="reset"
                        callBack={reset}/>

                </div>

            </div>
        </div>
    );
};

export default Counter;