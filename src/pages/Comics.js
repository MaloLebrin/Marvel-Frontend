import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Pagination from "react-js-pagination";
import axios from "axios"
import "../scss/Comics.scss"
import Loader from "../components/loader/Loader"
import Card from "../components/card/Card"

const Comics = () => {
    const { id } = useParams();
    const history = useHistory();

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [resultPage, setResultPage] = useState(0)
    const recordPerPage = 100;
    const pageRange = 5;

    useEffect(() => {
        const fetData = async () => {
            const response = await axios.get(
                `http://localhost:3001/comics?offset=${resultPage}`
                // `http://localhost:3001/character/:id=${id}`
            )
            setData(response.data)
            console.log(response.data);
            setIsLoading(false)
        };
        fetData();
    }, [resultPage])

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
        setResultPage(resultPage + 100)
    }
    return isLoading ? (<Loader />) : (
        <main id="Comics">
            <div className="container">
                <h1>Discover the comics by Marvel</h1>
                <h3 className="total-comics">Total comics in Database : {data.data.total}</h3>
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

export default Comics
