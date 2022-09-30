import React, {ChangeEvent} from 'react';
import s from "./Input.module.css"

type InputPropsType = {
    warn: boolean
    value: string
    ValueChange: (value: string) => void
    type: string
}

const Input = (props: InputPropsType) => {

    const {ValueChange, type, value, warn} = props

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        ValueChange(e.currentTarget.value)
    }

    return (
        <input
            value={value}
            className={warn ? s.warning : s.input}
            onChange={onChangeHandler}
            type={type}/>
    );
};

export default Input;