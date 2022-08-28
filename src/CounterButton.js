import React, { useEffect } from "react";

export const CounterButton = ({ numberOfClicks, incr }) => {
    useEffect(() => console.log('useEffect called!'), []);
    return (
        <>
        <p>You've clicked the button {numberOfClicks} times</p>
        <button onClick={incr}>Click Me</button>
        </>
    );
};
