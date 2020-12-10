import React from "react";
import logo from "../assets/images/udm-logo.png";

export const Header = () => {
    return (
        <header>
            <div className="header">
                <img src={logo} alt="UDM"></img>
            </div>
            <div className="header">
                <div className="title">
                    <h1>UNDERGROUND DANCE MUSIC</h1>
                </div>
            </div>
        </header>
    );
};
