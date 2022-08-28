import React from "react";

export const CongratulationsMessage = ({ numberOfClicks, threshhold }) => {
    return numberOfClicks >= threshhold
        ? <h1>Congrats! U reached {threshhold} clicks</h1>
        : null;
};
