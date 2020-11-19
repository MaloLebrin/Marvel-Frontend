import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import axios from "axios"
import "../scss/favorites.scss"
import Loader from "../components/loader/Loader"
import Card from "../components/card/Card"

const Favorites = ({ token }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetData = async () => {
            const response = await axios.get(`http://localhost:3001//user/allFavs`)
            setData(response.data)
            console.log(data);
            setIsLoading(false)
        };
        fetData();
    }, [data])

    if (token) {
        return isLoading ? (<Loader />) : (
            <main id="FavoritesPage">
                <h1>All your {data.count} favorites</h1>
                <div className="container">
                    <div className="items-list">
                        {data.favs.map((item) => {

                            return (
                                <Card
                                    thumbnail={item.image}
                                    description={item.description}
                                    name={item.title}
                                    id={item.idMarvel}
                                    key={item.idMarvel}
                                    data={item}
                                ></Card>
                            );
                        })}
                    </div>
                </div>
            </main>
        )
    } else {
        return <Redirect to={{ pathname: '/login' }} />
    }
}
export default Favorites