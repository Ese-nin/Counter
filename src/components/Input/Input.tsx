import React, {ChangeEvent} from 'react';
import s from "./Input.module.css"

type InputPropsType = {
    warn: boolean
    value: string
    valueChange: (value: string) => void
}

const Input = (props: InputPropsType) => {

    const {valueChange, value, warn} = props

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        valueChange(e.currentTarget.value)
    }

    return (
        <input
            disabled={warn}
            value={value}
            className={warn ? s.warning : s.input}
            onChange={onChangeHandler}
            type="number"/>
    );
};

export default Input;