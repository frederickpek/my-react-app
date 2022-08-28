import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export const ProtectedPage = () => {
    const navigate = useNavigate();
    const isAuth = false;

    useEffect(() => {
        if (!isAuth) navigate("/");
    });

    return <h1>Only authenticated users should see this</h1>
};
