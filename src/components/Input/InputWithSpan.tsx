import React from 'react';
import s from "../SettingWindow/SettingWindow.module.css";
import Input from "./Input";

type InputWithSpanPropsType = {
    minView: string
    maxView: string
    title: 'MIN VALUE' | 'MAX VALUE'
    minValue: string
    maxValue: string
    warning: string
    valueChange: (value: string) => void
}

export const InputWithSpan = React.memo((props: InputWithSpanPropsType) => {

    const {title, minValue, maxValue, valueChange, warning, minView, maxView} = props

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
    const finalViewValue = title === 'MIN VALUE' ? minView : maxView

    return (
        <>
            {title}({finalViewValue})
            <span className={s.errorSpan}>{finalSpanMessage}</span>
            <Input
                warn={warning}
                value={finalValue}
                valueChange={valueChange}/>
        </>
    );
});