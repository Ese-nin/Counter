import React from 'react';
import Button from "../Button/Button";
import Display from "../Display/Display";
import s from "./Counter.module.css"
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../state/store";
import {changeErrorCountAC, increaseCountAC, InitStateType, resetCountAC} from "../../state/counterReducer";


const Counter = () => {

    const state = useSelector<RootStateType, InitStateType>(state => state.counter)

    const dispatch = useDispatch()


    const inc = () => {
        dispatch(increaseCountAC())
    }

    const reset = () => {
        dispatch(resetCountAC(+state.minValue))
        dispatch(changeErrorCountAC(''))
    }

    return (
        <div className={s.container}>
            <div className={s.counter}>

                <div className={state.count === +state.maxValue ? s.errorCount : s.display}>
                    <Display count={state.count}/>
                </div>

                <div className={s.buttons}>

                    <Button
                        disable={state.count === +state.maxValue ? "disable" : ""}
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