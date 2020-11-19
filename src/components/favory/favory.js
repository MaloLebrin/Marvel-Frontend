import React, { useEffect, useState } from "react";
import axios from "axios";
import HeartIcon from "../../assets/img/heart-regular.svg"

const Favory = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [userFavData, setUserFavData] = useState();
    const [favStatus, setFavStatus] = useState();
    const addOrRemoveFav = async ({ idMarvel, title, category, image, description }) => {
        try {
            const response = await axios.post(
                `http://localhost:3001/user/addFav?idMarvel=${idMarvel}&title=${title}&category=${category}&image=${image}&description=${description}`)
            setUserFavData(response.data)
            console.log(userFavData);
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="favory-wrapper">
            <button className={favStatus === false ? "iconFav" : "iconFavActive"}
                onClick={() => {
                    addOrRemoveFav()
                }}
            >
                <img src={HeartIcon} alt="HeartFavory" />
            </button>
        </div>
    )
}
export default Favory