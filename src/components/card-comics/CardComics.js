import React from 'react'
import { useHistory } from "react-router-dom";

const CardComics = ({ prospData, description, name, id, thumbnail }) => {
    const history = useHistory()

    console.log("props data", prospData);
    return (
        <div className="card-comics-wrapper" id="card-comics" onClick={() => history.push(`character/${id}`)}>
            <div className="card-comics-content">
                <img alt={prospData.name} src={thumbnail} />
            </div>
            <div className="card-comics-content">
                <div className="card-comics-content-text">
                    <p className="card-comics-avatar-name">{name}</p>
                    <p className="description">{description}</p>
                    <p className="infos"><span>Book length : {prospData.pageCount}</span>
                        <span>Price : {prospData.prices[0].price} €</span>
                    </p>
                </div>
            </div>
        </div>)
}

export default CardComics
