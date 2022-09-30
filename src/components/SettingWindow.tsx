import React, {ChangeEvent, useState} from 'react';
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

    const [min, setMin] = useState(minValue)
    const [max, setMax] = useState(maxValue)
    const [warn, setWarn] = useState(false)

    const minValueChange = (value: string) => {
        setMin(value)
    }

    const maxValueChange = (value: string) => {
        setMax(value)
    }

    const setValueHandler = () => {
        min >= max ? setWarn(true) :
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
                        ValueChange={minValueChange}
                        type="number"/>
                    MAX VALUE
                    <Input
                        warn={warn}
                        value={warn ? "999" : max}
                        ValueChange={maxValueChange}
                        type="number"/>
                </div>
                <div className={s.buttons}>
                    <Button name="set" callBack={setValueHandler}/>
                </div>
            </div>
        </div>
    );
};

export default SettingWindow;