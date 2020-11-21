import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import Loader from "../loader/Loader"
import Favory from "../favory/favory"

const Card = ({ data, description, name, id, thumbnail, token }) => {
    const [descriptionOnHover, setDescriptionOnHover] = useState("hide");
    const history = useHistory()
    const showDescription = (event) => {
        setDescriptionOnHover("visible");
    };

    const hideDescription = (event) => {
        setDescriptionOnHover("hide");
    };
    // console.log(data);
    return data ? (
        <div className="card-wrapper" id="card" onMouseEnter={showDescription}
            onMouseLeave={hideDescription} >
            <div className="card-img" >
                <img alt={data.name ? data.name : data.title} src={thumbnail} onClick={() => history.push(`character/${id}`)} />
                <div className="card-content">
                    <span className="card-avatar-name">{name}</span>
                    <Favory className="heartIcon" token={token} data={data}
                    // idMarvel={data.id} title={data.name} image={data.thumbnail.path + "." + data.thumbnail.extension} description={data.description} 
                    />
                    <p className={`description ${descriptionOnHover}`}>{description}</p>
                </div>
            </div>
        </div>)
        : (<Loader />)
}

export default Card;
