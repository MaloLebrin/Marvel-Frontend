import React, { useState, useEffect } from "react";
import axios from "axios"
import "../scss/home.scss"
import Search from "../components/search/Search"
import Card from "../components/card/Card"
import Loader from "../components/loader/Loader"

const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    const limit = 100;
    // if (search.length < 1) {
    //     // const `${urlToRequest}?ts=${timestamp}&limit=${limit}&offset=${offset}&orderBy=${wording}&${wording}StartsWith=${searchBar}`;
    // }

    useEffect(() => {
        const fetData = async () => {
            const response = await axios.get(`http://localhost:3001/characters?limit=${limit}&orderBy=name`)
            setData(response.data)
            console.log(data);
            setIsLoading(false)
        };
        fetData();
    }, [])
    return isLoading ? (<Loader />) : (
        <main id="HomePage">
            <Search search={search} setSearch={setSearch} />
            <h1>Come into the Marvel universe</h1>
            <div className="container">
                <div className="items-list">
                    {data.data.results.map((item, id) => {

                        return (
                            <Card
                                thumbnail={item.thumbnail.path + "." + item.thumbnail.extension}
                                description={item.description}
                                name={item.name}
                                id={item.id}
                                key={id}
                                data={item}
                            ></Card>
                        );
                    })}
                </div>
            </div>
        </main>
    )
}

export default Home
