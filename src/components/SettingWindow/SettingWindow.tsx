import React from 'react';
import s from "./SettingWindow.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../state/store";
import {
    changeMaxValueAC,
    changeMinValueAC,
    changeWarningAC,
    InitStateType,
    resetCountAC
} from "../../state/counterReducer";

const SettingWindow = () => {

    const state = useSelector<RootStateType, InitStateType>(state => state.counter)

    const dispatch = useDispatch()

    const minOverMax = +state.minValue >= +state.maxValue

    // проверка на ошибку и изменение значения инпута, если ошибки нет
    const minValueChange = (value: string) => {
        minOverMax
            ? dispatch(changeWarningAC('warn'))
            : dispatch(changeWarningAC(''))

        dispatch(changeMinValueAC(value))
    }

    const maxValueChange = (value: string) => {
        minOverMax
            ? dispatch(changeWarningAC('warn'))
            : dispatch(changeWarningAC(''))

        dispatch(changeMaxValueAC(value))
    }

    // регистрация ошибки либо отправка значений инпутов в LocalStorage, если ошибки нет
    const setValueHandler = () => {
        if (Number.isInteger(+state.minValue) && Number.isInteger(+state.maxValue)) {
            minOverMax
                ? dispatch(changeWarningAC('warn'))
                : dispatch(resetCountAC(+state.minValue))
        }
    }

    // сброс значений на дефолтные
    const defaultValueHandler = () => {
        if (state.warning) {
            dispatch(changeWarningAC(''))
        }
        minValueChange("0")
        maxValueChange("5")
    }

    // errorSpan и его варианты при разных ошибках
    let errorSpanMin = ""
    if (!Number.isInteger(+state.minValue)) {
        errorSpanMin = "enter an integer"
    } else if (+state.minValue < 0) {
        errorSpanMin = 'enter a positive number'
    }else if (+state.minValue > +state.maxValue) {
        errorSpanMin = "min > max"
    } else if (+state.minValue === +state.maxValue) {
        errorSpanMin = "min = max"
    }

    let errorSpanMax = Number.isInteger(+state.maxValue) ? "" : "enter an integer"

    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.display}>

                    MIN VALUE
                    <span className={s.errorSpan}>{errorSpanMin}</span>
                    <Input
                        warn={state.warning}
                        value={state.minValue}
                        valueChange={minValueChange}/>

                    MAX VALUE
                    <span className={s.errorSpan}>{errorSpanMax}</span>
                    <Input
                        warn={state.warning}
                        value={state.maxValue}
                        valueChange={maxValueChange}/>

                </div>
                <div className={s.buttons}>
                    <Button disable={state.warning} name="save" callBack={setValueHandler}/>
                    <Button name="default" callBack={defaultValueHandler}/>
                </div>
            </div>
        </div>
    );
};

export default SettingWindow;