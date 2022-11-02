import React from 'react';
import s from "../SettingWindow/SettingWindow.module.css";
import Input from "./Input";

type InputWithSpanPropsType = {
    title: 'MIN VALUE' | 'MAX VALUE'
    minValue: string
    maxValue: string
    warning: string
    valueChange: (value: string) => void
}

export const InputWithSpan = (props: InputWithSpanPropsType) => {

    const {title, minValue, maxValue, valueChange, warning} = props

    // errorSpan и его варианты при разных ошибках
    let errorSpanMin = ""
    if (!Number.isInteger(+minValue)) {
        errorSpanMin = "enter an integer"
    } else if (+minValue < 0 || +maxValue < 0) {
        errorSpanMin = "enter a positive number"
    } else if (+minValue > +maxValue) {
        errorSpanMin = "min > max"
    } else if (+minValue === +maxValue) {
        errorSpanMin = "min = max"
    }

    const errorSpanMax = Number.isInteger(+maxValue) ? "" : "enter an integer"

    const finalSpanMessage = title === 'MIN VALUE' ? errorSpanMin : errorSpanMax
    const finalValue = title === 'MIN VALUE' ? minValue : maxValue

    return (
        <>
            {title}
            <span className={s.errorSpan}>{finalSpanMessage}</span>
            <Input
                warn={warning}
                value={finalValue}
                valueChange={valueChange}/>
        </>
    );
};