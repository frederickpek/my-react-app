import React from "react";

export const Greeting = ({ name, num }) => {
    if (!name) return null; 
    let isMorning = (new Date()).getHours() < 12;
    let header = isMorning
        ? <h3>Good Morning {name}!</h3>
        : <h3>Good Evening {name}!</h3>;
    return (
        <>
            {header}
            {num === 0 
                ? null
                : <p>Let's play for {num} hours!</p>}
        </>
    )
};
