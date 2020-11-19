import React, { useState, useEffect } from "react";
import axios from "axios"
import "../scss/home.scss"
import Search from "../components/search/Search"
import Card from "../components/card/Card"
import Pagination from "react-js-pagination";

import Loader from "../components/loader/Loader"

const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [resultPage, setResultPage] = useState(0)
    const recordPerPage = 100;
    const pageRange = 5;

    const limit = 100;

    useEffect(() => {
        const fetData = async () => {
            const response = await axios.get(`http://localhost:3001/characters?limit=${limit}&orderBy=name`)
            setData(response.data)
            console.log(data);
            setIsLoading(false)
        };
        fetData();
    }, [resultPage])

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
        setResultPage(resultPage + 100)
    }

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
                <div className="pagination-wrapper">
                    <Pagination
                        hideDisabled
                        prevPageText='Previous'
                        nextPageText='Next'
                        firstPageText='First Page'
                        lastPageText='Last Page'
                        hideFirstLastPages
                        activePage={currentPage}
                        itemsCountPerPage={recordPerPage}
                        totalItemsCount={data.data.total}
                        pageRangeDisplayed={pageRange}
                        onChange={handlePageChange}
                    />
                </div>

            </div>
        </main>
    )
}

export default Home
