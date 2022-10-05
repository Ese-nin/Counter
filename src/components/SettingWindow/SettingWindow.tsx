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
    const [warn, setWarn] = useState(false)

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

    const exam = +min >= +max - 1

    const minValueChange = (value: string) => {
        exam ? setWarn(true) : setWarn(false);

        setMin(value)
    }

    const maxValueChange = (value: string) => {
        exam ? setWarn(true) : setWarn(false);

        setMax(value)
    }

    const setValueHandler = () => {
        exam ? setWarn(true) :
            setValue(+min, +max);
    }

    const defaultValueHandler = () => {
        if (warn) {setWarn(false)}
        setMin("0")
        setMax("5")
    }

    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.display}>
                    MIN VALUE
                    <Input
                        warn={warn}
                        value={warn ? "000" : min}
                        valueChange={minValueChange}/>
                    MAX VALUE
                    <Input
                        warn={warn}
                        value={warn ? "999" : max}
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