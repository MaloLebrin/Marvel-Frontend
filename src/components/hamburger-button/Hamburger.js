import React from 'react'
import "../../scss/Hamburger.scss"
const Hamburger = ({ Open, setOpen }) => {
    return (
        <button
            className={`hamburger ${Open ? "is-open" : ""}`}
            onClick={() => {
                setOpen(!Open)
            }}
        >
            <span class="hamburger bar"></span>
        </button>
    )
}

export default Hamburger
