import React from "react";
import "../../App.scss"
import MarvelIcon from "../../assets/img/marvelicon.png"
const Loader = () => {
    return (
        <div id="Loader" className="container">
            <div className="loader-image">
                <img className="image-marvel" src={MarvelIcon} alt="marvelicon" />
            </div>
        </div>
    );
};

export default Loader;