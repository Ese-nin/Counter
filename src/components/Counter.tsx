import React from 'react';
import Button from "./Button";

type CounterPropsType = {
    error: boolean
    count: number
    tap: () => void
    zero: () => void
}

const Counter = (props: CounterPropsType) => {

    const {error, count, tap, zero} = props

    const resultCount = <div className={error ? "errorCount" : ""}>{count}</div>

    return (
        <div>
            <div className="display">
                {resultCount}
            </div>
            <div>

                 {/*simple buttons*/}
                {/*<button
                    disabled={error}
                    onClick={tap}>tap
                </button>
                <button
                    disabled={count === 0}
                    onClick={zero}>zero
                </button>*/}

                {/*universal buttons?*/}
                <Button
                    disable={error}
                    name="tap"
                    callBack={tap}/>
                <Button
                    disable={count === 0}
                    name="zero"
                    callBack={zero}/>
            </div>
        </div>
    );
};

export default Counter;