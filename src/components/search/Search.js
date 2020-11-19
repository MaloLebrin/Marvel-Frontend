import React from "react";
import "../../scss/search.scss";

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
            </form>
        </div>
    );
};

export default Search;