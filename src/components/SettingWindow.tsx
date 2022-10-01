import React, {useEffect, useState} from 'react';
import s from "./SettingWindow.module.css";
import Button from "./Button";
import Input from "./Input";

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

    const minValueChange = (value: string) => {
        min >= max ? setWarn(true) :
        setWarn(false)
        setMin(value)
    }

    const maxValueChange = (value: string) => {
        min >= max ? setWarn(true) :
        setWarn(false)
        setMax(value)
    }

    const setValueHandler = () => {
            setValue(+min, +max);
    }

    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.display}>
                    MIN VALUE
                    <Input
                        warn={warn}
                        value={warn ? "000" : min}
                        valueChange={minValueChange}
                        type="number"/>
                    MAX VALUE
                    <Input
                        warn={warn}
                        value={warn ? "999" : max}
                        valueChange={maxValueChange}
                        type="number"/>
                </div>
                <div className={s.buttons}>
                    <Button disable={warn} name="set" callBack={setValueHandler}/>
                </div>
            </div>
        </div>
    );
};

export default SettingWindow;