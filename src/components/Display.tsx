import React from 'react';

type DisplayPropsType = {
    count: number
}

const Display = (props: DisplayPropsType) => {

    const {count} = props

    return (
        <div>{count}</div>
    );
};

export default Display;