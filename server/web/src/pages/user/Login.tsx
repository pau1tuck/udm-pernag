import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { checkAuth } from "../../utils/permissions";

export const Login = () => {
    const isLoggedIn = checkAuth();
    const history = useHistory();

    useEffect(() => {
        if (isLoggedIn) {
            console.log("Logged in:" + isLoggedIn);
            history.push("/");
        }
    }, []);

    return <div></div>;
};
