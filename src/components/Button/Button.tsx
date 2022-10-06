import React from 'react';
import s from "./Button.module.css"

type ButtonPropsType = {
    name: string
    callBack: () => void
    disable?: string
}

const Button = (props: ButtonPropsType) => {

    const {name, callBack, disable} = props

    let style = s.button
    + (disable ? " " + s.disButton : " " + s.actButton)

    return (
        <button
            className={style}
            disabled={!!disable}
            onClick={callBack}>
            {name}
        </button>
    );
};

export default Button;