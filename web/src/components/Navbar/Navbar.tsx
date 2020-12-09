import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export const Navbar = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    return (
        <div>
            <nav className="navbar">
                <span className="navbar_toggle">
                    <a href="#" onClick={toggleMenu}>
                        <GiHamburgerMenu />
                    </a>
                </span>
                <ul className="navbar_items">
                    <li className="navbar_item">
                        <a href="#">Log in</a>
                    </li>
                    <li className="navbar_item navbar_item-signup">
                        <a href="#">Sign up</a>
                    </li>
                </ul>
            </nav>
            <nav className="sidebar"></nav>
        </div>
    );
};
