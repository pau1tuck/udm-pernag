import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export const Navbar = () => {
    const [sidebarClass, setSidebarClass] = useState("sidebar sidebar-closed");

    const openSidebar = () => {
        setSidebarClass("sidebar");
    };
    const closeSidebar = () => {
        setSidebarClass("sidebar sidebar-closed");
    };

    return (
        <div>
            <nav className="navbar">
                <span className="sidebar_btn-open">
                    <a href="#" onClick={openSidebar}>
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
            <nav className={sidebarClass}>
                <span>
                    <a
                        href="#"
                        onClick={closeSidebar}
                        className="sidebar_btn-close"
                    >
                        <IoMdClose />
                    </a>
                </span>
                <ul>
                    <li className="sidebar_item sidebar_item-signup">
                        <a href="#">SIGN UP</a>
                    </li>
                    <li>
                        <a href="#">LOG IN</a>
                    </li>
                    <li>
                        <a href="#">CONTACT</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
