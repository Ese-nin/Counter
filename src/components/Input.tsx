import React, {ChangeEvent} from 'react';

type InputPropsType = {
    ValueChange: (value: string) => void
    type: string
}

const Input = (props: InputPropsType) => {

    const {ValueChange, type} = props

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        ValueChange(e.currentTarget.value)
    }

    const style = "input"

    return (
        <input
            className={style}
            onChange={onChangeHandler}
            type={type}/>
    );
};

export default Input;