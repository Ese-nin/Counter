import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: () => void
    disable?: boolean
}

const Button = (props: ButtonPropsType) => {

    const {name, callBack, disable} = props

    let style = disable ? "disButton" : "actButton"

    return (
        <button
            className={style}
            disabled={disable}
            onClick={callBack}>
            {name}
        </button>
    );
};

export default Button;