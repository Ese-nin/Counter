import React from 'react';

type DisplayPropsType = {
    count: number
}

const Display = React.memo((props: DisplayPropsType) => {

    const {count} = props

    return (
        <div>{count}</div>
    );
});

export default Display;