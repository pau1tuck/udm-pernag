import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <span className="toggle">
                <a href="#" onClick="toggleMenu()"></a>
            </span>
            <li className="toggle">
                <a href="#">
                    <GiHamburgerMenu />
                </a>
            </li>
            <li className="toggle">
                <a href="#">
                    <IoMdClose />
                </a>
            </li>
        </nav>
    );
};
