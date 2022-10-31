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

export const selectCounter = (state: RootStateType) => state.counter

const SettingWindow = () => {

    const state = useSelector<RootStateType, InitStateType>(selectCounter)

    const dispatch = useDispatch()

    // const minOverMax = +state.minValue >= +state.maxValue

    // проверка на ошибку и изменение значения инпута, если ошибки нет
    const minValueChange = (value: string) => {
        if (+state.maxValue <= +value || +value < 0) {
            dispatch(changeWarningAC('warn'))
        } else {
            dispatch(changeWarningAC(''))
        }
        dispatch(changeMinValueAC(value))
    }

    const maxValueChange = (value: string) => {
        if (+state.minValue >= +value || +value < 0) {
            dispatch(changeWarningAC('warn'))
        } else {
            dispatch(changeWarningAC(''))
        }
        dispatch(changeMaxValueAC(value))
    }

    // регистрация ошибки либо отправка значений инпутов в LocalStorage, если ошибки нет
    const setValueHandler = () => {
        if (Number.isInteger(+state.minValue) && Number.isInteger(+state.maxValue)) {
            dispatch(resetCountAC())
        }
    }

    const defaultMinValue = "0"
    const defaultMaxValue = "5"

    // сброс значений на дефолтные
    const defaultValueHandler = () => {
        if (state.warning) {
            dispatch(changeWarningAC(''))
        }
        minValueChange(defaultMinValue)
        maxValueChange(defaultMaxValue)
    }

    // errorSpan и его варианты при разных ошибках
    let errorSpanMin = ""
    if (!Number.isInteger(+state.minValue)) {
        errorSpanMin = "enter an integer"
    } else if (+state.minValue < 0 || +state.maxValue < 0) {
        errorSpanMin = "enter a positive number"
    } else if (+state.minValue > +state.maxValue) {
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