import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/user/Login";

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </div>
    );
};
