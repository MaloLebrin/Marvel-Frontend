import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import "../../scss/HeaderFooter.scss";

const Header = ({ setLoginModal }) => {
    return (
        <header id="Header">
            <div className="header-wrapper">
                <div className="logo">
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/characters">CHARACTERS</Link>
                        </li>
                        <li>
                            <Link to="/comics">COMICS</Link>
                        </li>
                        <li>
                            <Link to="/favs">MY FAVS</Link>
                        </li>
                    </ul>
                </nav>
                <div className="login">
                    <button
                        className="redButton"
                    // onClick={() => setLoginModal("loginVisible")}
                    >
                        Login
          </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
