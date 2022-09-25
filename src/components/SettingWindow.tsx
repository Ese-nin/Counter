import React, {ChangeEvent, useState} from 'react';
import s from "./SettingWindow.module.css";
import Button from "./Button";
import Input from "./Input";

type SetWindPropsType = {
    setValue: (newMinValue: number, newMaxValue: number) => void
}

const SettingWindow = (props: SetWindPropsType) => {

    const {setValue} = props

    const [min, setMin] = useState("")
    const [max, setMax] = useState("")

    const minValueChange = (value: string) => {
        setMin(value)
    }

    const maxValueChange = (value: string) => {
        setMax(value)
    }

    const setValueHandler = () => {
        setValue(+min, +max)
    }

    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.display}>
                    MIN VALUE
                    <Input
                        ValueChange={minValueChange}
                        type="number"/>
                    MAX VALUE
                    <Input
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