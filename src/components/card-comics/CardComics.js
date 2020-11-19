import React, { useState } from 'react'
import { useHistory, Link } from "react-router-dom";

const CardComics = ({ prospData, description, name, id, thumbnail }) => {
    const [descriptionOnHover, setDescriptionOnHover] = useState("hide");
    const history = useHistory()
    // const showDescription = (event) => {
    //     setDescriptionOnHover("visible");
    // };
    // const hideDescription = (event) => {
    //     setDescriptionOnHover("hide");
    // };

    console.log("props data", prospData);
    return (
        <div className="card-comics-wrapper" id="card-comics" onClick={() => history.push(`character/${id}`)}>
            <div className="card-comics-content">
                {/* <div className="card-comics-img" > */}
                <img alt={prospData.name} src={thumbnail} />
            </div>
            <div className="card-comics-content">
                <div className="card-comics-content-text">
                    <p className="card-comics-avatar-name">{name}</p>
                    <p className="description">{description}</p>
                    <p><span>Book length : {prospData.pageCount}</span></p>
                </div>
            </div>
            {/* </div> */}
        </div>)
}

export default CardComics
