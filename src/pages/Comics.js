import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import axios from "axios"
import "../scss/Comics.scss"
import Loader from "../components/loader/Loader"
import Card from "../components/card/Card"

const Comics = () => {
    const { id } = useParams();
    const history = useHistory();

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([]);
    const date = new Date();
    const ts = Math.floor(date.getTime() / 1000);

    useEffect(() => {
        const fetData = async () => {
            const response = await axios.get(
                `http://localhost:3001/comics`
                // `http://localhost:3001/character/:id=${id}`
            )
            setData(response.data)
            console.log(response.data);
            setIsLoading(false)
        };
        fetData();
    }, [])
    return isLoading ? (<Loader />) : (
        <main id="one-character">
            <div className="container">
                <h1>Discover the comics by Marvel</h1>
                <div className="container">
                    <div className="items-list">
                        {data.data.results.map((item, id) => {

                            return (
                                <Card
                                    thumbnail={item.thumbnail.path + "." + item.thumbnail.extension}
                                    description={item.description}
                                    name={item.title}
                                    id={item.id}
                                    key={id}
                                    data={item}
                                ></Card>
                            );
                        })}
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Comics
