import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../logo/Logo";
import Hamburger from "../hamburger-button/Hamburger"
import "../../scss/HeaderFooter.scss";

const Header = ({ token, setUserToken }) => {
    const history = useHistory()
    const [Open, setOpen] = useState(false)

    return (
        <header id="Header">
            <div className="header-wrapper">
                <div className="logo">
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>
                {/* <div > */}
                <nav className="desktop">
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
                }} className="button logout desktop">Se Déconnecter</button>
                ) : (
                        <div className="login desktop">
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
                {/* </div> */}
                <nav className="mobile">
                    <Hamburger Open={Open} setOpen={setOpen} />
                    <ul className={Open ? "open" : ""}>
                        <li>
                            <Link to="/characters">CHARACTERS</Link>
                        </li>
                        <li>
                            <Link to="/comics">COMICS</Link>
                        </li>
                        <li>
                            <Link to="/favs">MY FAVS</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>

                    </ul>

                </nav>
            </div>
        </header>
    );
};

export default Header;
