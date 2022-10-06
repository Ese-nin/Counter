import React, {useEffect, useState} from 'react';
import s from "./SettingWindow.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

type SetWindPropsType = {
    minValue: string
    maxValue: string
    setValue: (newMinValue: number, newMaxValue: number) => void
}

const SettingWindow = (props: SetWindPropsType) => {

    const {setValue, minValue, maxValue} = props

    const [min, setMin] = useState<string>(minValue)
    const [max, setMax] = useState<string>(maxValue)
    const [warn, setWarn] = useState("")

    useEffect(() => {
        let temp = localStorage.getItem("minValue");
        if (temp) {
            let newValue = JSON.parse(temp)
            setMin(newValue)
        }
    }, [])

    useEffect(() => {
        let temp = localStorage.getItem("maxValue");
        if (temp) {
            let newValue = JSON.parse(temp)
            setMax(newValue)
        }
    }, [])

    const minOverMax = +min >= +max - 1

    const minValueChange = (value: string) => {
        minOverMax ? setWarn("warn") : setWarn("");

        setMin(value)
    }

    const maxValueChange = (value: string) => {
        minOverMax ? setWarn("warn") : setWarn("");

        setMax(value)
    }

    const setValueHandler = () => {
        if (Number.isInteger(+min) && Number.isInteger(+max)) {
            minOverMax ? setWarn("warn") : setValue(+min, +max);
        }
    }

    const defaultValueHandler = () => {
        if (warn) setWarn("")
        setMin("0")
        setMax("5")
    }

    let errorSpanMin = ""
    if (!Number.isInteger(+min)) {
        errorSpanMin = "enter an integer"
    } else if (+min > +max) {
        errorSpanMin = "min > max"
    } else if (+min === +max) {
        errorSpanMin = "min = max"
    }

    let errorSpanMax = Number.isInteger(+max) ? "" : "enter an integer"

    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.display}>

                    MIN VALUE
                    <span className={s.errorSpan}>{errorSpanMin}</span>
                    <Input
                        warn={warn}
                        value={min}
                        valueChange={minValueChange}/>

                    MAX VALUE
                    <span className={s.errorSpan}>{errorSpanMax}</span>
                    <Input
                        warn={warn}
                        value={max}
                        valueChange={maxValueChange}/>

                </div>
                <div className={s.buttons}>
                    <Button disable={warn} name="set" callBack={setValueHandler}/>
                    <Button name="default" callBack={defaultValueHandler}/>
                </div>
            </div>
        </div>
    );
};

export default SettingWindow;