import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

const Favory = ({ token, data }) => {
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(true)
    const [userFavData, setUserFavData] = useState();
    const [favStatus, setFavStatus] = useState(false);
    const addOrRemoveFav = async ({ idMarvel, title, category, image, description }) => {
        console.log(data);
        try {
            if (category) {
                category = category
            } else {
                category = null
            }
            const response = await axios.post(
                // `http://localhost:3001/user/addFav?idMarvel=${idMarvel}&title=${title}&category=${category}&image=${image}&description=${description}`,
                `http://localhost:3001/user/addFav`,
                {
                    idMarvel: idMarvel,
                    title: title,
                    category: category,
                    image: image,
                    description: description
                },
                {
                    headers: {
                        authorization: "Bearer " + token,
                    }
                }
            )
            setUserFavData(response.data)
            if (userFavData.saved === true && userFavData.deleted === false) {
                setFavStatus(true)
            } else {
                setFavStatus(false)
            }
            console.log(userFavData);
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="favory-wrapper">
            <button
                onClick={() => {
                    token && data ? addOrRemoveFav({ idMarvel: data.id, title: data.name ? data.name : data.title, category: data.category, image: data.thumbnail.path + "." + data.thumbnail.extension, description: data.description }) : history.push("/login")
                }}
            >
                <svg className={favStatus === false ? "" : "active"}
                    aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
            </button>
        </div>
    )
}
export default Favory