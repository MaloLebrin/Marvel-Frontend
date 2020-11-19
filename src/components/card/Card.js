import React, { useState } from 'react'
import { useHistory, Link } from "react-router-dom";
import Loader from "../loader/Loader"

const CardOffer = ({ data, description, name, id, thumbnail }) => {
    const [descriptionOnHover, setDescriptionOnHover] = useState("hide");
    const history = useHistory()
    const showDescription = (event) => {
        setDescriptionOnHover("visible");
    };

    const hideDescription = (event) => {
        setDescriptionOnHover("hide");
    };
    console.log(data);
    return data ? (
        <Link className="card-wrapper" id="card" onMouseEnter={showDescription}
            onMouseLeave={hideDescription} onClick={() => history.push(`character/${id}`)}>
            <div className="card-img" >
                <img alt={data.name} src={thumbnail} />
                <div className="card-content">
                    <span className="card-avatar-name">{name}</span>
                    <p className={`description ${descriptionOnHover}`}>{description}</p>
                </div>
            </div>
        </Link>)
        : (<Loader />)
}

export default CardOffer
