import React from 'react';
import s from "./SettingWindow.module.css";
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../state/store";
import {
    changeMaxValueAC,
    changeMinValueAC,
    changeWarningAC,
    InitStateType,
    resetCountAC
} from "../../state/counterReducer";
import {InputWithSpan} from "../Input/InputWithSpan";

export const selectCounter = (state: RootStateType) => state.counter

const SettingWindow = () => {

    const state = useSelector<RootStateType, InitStateType>(selectCounter)

    const dispatch = useDispatch()

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

    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.display}>

                    <InputWithSpan
                        title={'MIN VALUE'}
                        minValue={state.minValue}
                        maxValue={state.maxValue}
                        warning={state.warning}
                        valueChange={minValueChange}
                    />

                    <InputWithSpan
                        title={'MAX VALUE'}
                        minValue={state.minValue}
                        maxValue={state.maxValue}
                        warning={state.warning}
                        valueChange={maxValueChange}
                    />

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