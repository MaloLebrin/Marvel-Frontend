import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios"
import "../scss/OneCharacter.scss"
import CardComics from "../components/card-comics/CardComics"

import Loader from "../components/loader/Loader"

const OneCharacter = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([]);
    const [comicsData, setComicsData] = useState()
    const { id } = useParams();
    console.log(comicsData);
    useEffect(() => {
        const fetData = async () => {
            const response = await axios.get(`http://localhost:3001/character/${id}`)
            setData(response.data)
            // console.log(data);
            const responseComics = await axios.get(`http://localhost:3001/character/${id}/comics`)
            setComicsData(responseComics.data)
            comicsData ? setIsLoading(false) : setIsLoading(true);
            setIsLoading(false)
        };
        fetData();
    }, [])
    const Data = isLoading ? null : data.data.results[0];
    const ComicsDATA = isLoading ? null : comicsData.data.results;
    return isLoading ? (<Loader />) : (
        <main id="OneCharacterPage">
            <h1>Discover <span>{Data.name}</span> our new super Hero</h1>
            <div className="container">
                <div className="content-wrapper">
                    <img src={Data.thumbnail.path + "." + Data.thumbnail.extension} alt={Data.name} />
                    <p> <span>Description :</span> {Data.description}</p>
                </div>
                <div className="items-list">
                    {isLoading ? (<Loader />) : (ComicsDATA.map((item, index) => {

                        return (
                            <CardComics
                                thumbnail={item.images[0].path + "." + item.images[0].extension}
                                description={item.description}
                                name={item.title}
                                id={item.id}
                                key={index}
                                prospData={item}
                            ></CardComics>
                        )
                    }))}
                </div>

            </div>
        </main>
    )
}

export default OneCharacter
