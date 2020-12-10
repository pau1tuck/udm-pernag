import React from "react";
import logo from "../logo.svg";
import "../styles/App.scss";
import { Navbar } from "./Navbar/Navbar";
import { Routes } from "../config/routes";
import { Header } from "./Header";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes />
        </div>
    );
}

export default App;
