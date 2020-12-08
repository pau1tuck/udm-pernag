import React from "react";
import { useMeQuery } from "../config/graphql";

export const isAuthenticated = () => {
    const { data, error, loading } = useMeQuery();
};
