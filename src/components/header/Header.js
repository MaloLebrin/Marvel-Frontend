import React from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../logo/Logo";
import "../../scss/HeaderFooter.scss";

const Header = ({ token, setUserToken }) => {
    const history = useHistory()
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
                {token ? (<button onClick={() => {
                    setUserToken(null);
                }} className="button logout">Se Déconnecter</button>
                ) : (
                        <div className="login">
                            <button
                                className="redButton"
                                onClick={() => history.push('/login')}
                            >
                                Login
                    </button>
                            <button className="signup"
                                onClick={() => history.push("/signup")}>
                                Signup
                    </button>
                        </div>)}
            </div>
        </header>
    );
};

export default Header;
