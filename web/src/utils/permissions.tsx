import React from "react";
import { useMeQuery } from "../config/graphql";
import { isLoggedInVar } from "../config/cache";

export const isAuthenticated = () => {
    const { data, error, loading } = useMeQuery();
    if (loading) return console.log("Loading...");
    if (data != null) {
        console.log("User is logged in");
        isLoggedInVar(true);
    }
};
