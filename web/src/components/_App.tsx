import React from "react";
import logo from "../logo.svg";
import "../styles/App.scss";
import { Navbar } from "./Navbar/Navbar";
import { Header } from "./Header";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
        </div>
    );
}

export default App;
