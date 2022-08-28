import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { parse } from 'query-string';
import { CounterButton } from "../CounterButton";
import { CongratulationsMessage } from "../CongratulationsMessage";

export const CounterButtonPage = () => {
    const location = useLocation();
    const startValue = Number(parse(location.search).startValue);
    const [numberOfClicks, setNumberOfClicks] = useState(startValue);
    const incr = () => setNumberOfClicks(numberOfClicks + 1);

    return (
        <>
        <h1>The Counter Button Page</h1>
        <CongratulationsMessage numberOfClicks={numberOfClicks} threshhold={10}/>
        <CounterButton incr={incr} numberOfClicks={numberOfClicks}/>
        </>
    )
};