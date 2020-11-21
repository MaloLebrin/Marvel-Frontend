import React from "react";
import "../../scss/search.scss";
import SearchIcon from "../../assets/img/search-solid.svg"

const Search = ({ search, setSearch }) => {
    return (
        <div className="search">
            <form>
                <input
                    type="text"
                    placeholder="looking for Marvel's characters?"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
                <a className="search-btn" href="#"><img src={SearchIcon} alt="searchicon" /></a>
            </form>
        </div>
    );
};

export default Search;