import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios"
import "../scss/favorites.scss"
import Loader from "../components/loader/Loader"
import Card from "../components/card/Card"

const Favorites = ({ token }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetData = async () => {
            const response = await axios.get(`https://marvelapibackend.herokuapp.com/user/allFavs`,
                {
                    headers: {
                        authorization: "Bearer " + token,
                    }
                }
            )
            setData(response.data)
            console.log(data);
            setIsLoading(false)
        };
        fetData();
    }, [])

    if (token) {
        return isLoading ? (<Loader />) : (
            <main id="FavoritesPage">
                <h1>All your {data.count ? data.count : 0} favorites</h1>
                <div className="container">
                    <div className="items-list">
                        {data ? data.favs.map((item) => {

                            return (
                                <Card
                                    token={token}
                                    thumbnail={item.image}
                                    description={item.description}
                                    name={item.title}
                                    id={item.idMarvel}
                                    key={item.idMarvel}
                                    data={item}
                                ></Card>
                            );
                        }) : (                <h1>You don't have favorites</h1>
                            )}
                    </div>
                </div>
            </main>
        )
    } else {
        return <Redirect to={{ pathname: '/login' }} />
    }
}
export default Favorites