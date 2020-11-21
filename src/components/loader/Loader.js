import React from "react";
import "../../App.scss"
import MarvelIcon from "../../assets/img/marvelicon.png"
import Captain1 from "../../assets/img/loader-icons/captain-america (1).png"
import icons8Groot from "../../assets/img/loader-icons/icons8-groot.svg"
import superman from "../../assets/img/loader-icons/icons8-superman.svg"
import SpiderMan from "../../assets/img/loader-icons/icons8-tête-spider-man.svg"
import Batman from "../../assets/img/loader-icons/icons8-vieux-batman.svg"
import ironman from "../../assets/img/loader-icons/iron-man.svg"
import mjolnir from "../../assets/img/loader-icons/mjolnir.svg"
import spiderman from "../../assets/img/loader-icons/spiderman.svg"

const Loader = () => {
    return (
        <div id="Loader" className="container">
            <div className="loader-image">
                <img className="image-marvel" src={MarvelIcon} alt="marvelicon" />
                <img className="image-marvel" src={Captain1} alt="marvelicon" />
                <img className="image-marvel" src={superman} alt="marvelicon" />
                <img className="image-marvel" src={SpiderMan} alt="marvelicon" />
                <img className="image-marvel" src={Batman} alt="marvelicon" />
                <img className="image-marvel" src={icons8Groot} alt="marvelicon" />
                <img className="image-marvel" src={ironman} alt="marvelicon" />
                <img className="image-marvel" src={mjolnir} alt="marvelicon" />
                <img className="image-marvel" src={spiderman} alt="marvelicon" />

            </div>
        </div>
    );
};

export default Loader;