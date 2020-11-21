import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import axios from "axios";
import "../scss/signup.scss"
const Signup = ({ setUserToken }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState()

    const history = useHistory();

    const onSubmit = async (event) => {
        // console.log(email, password);
        try {
            event.preventDefault();
            const response = await axios.post(
                // "http://localhost:3001/user/signup",

                "https://marvelapibackend.herokuapp.com/user/signup",
                {
                    email: email,
                    password: password,
                })
            if (response.data.token) {
                setUserToken(response.data.token)
                console.log(response.data.token);
                history.push("/")
            } else {
                alert('une erreur est survenue')
            }
        } catch (error) {
            if (error.response.status === 409) {
                setErrorMessage("Cet email a déjà un compte chez nous !");
            }
        }
    }
    return (
        <div id="signupLoginPage">
            <h2 className="title-signup">S'inscrire</h2>
            <form onSubmit={onSubmit} className="signup-form">
                <input
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value);
                        setErrorMessage("");
                    }}
                    placeholder="Email"
                    type="email"
                />
                <span className="signup-login-error-message">{errorMessage}</span>
                <input
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                    placeholder="Password"
                    type="password"
                />
                <button type="submit">Signup</button>
            </form>
            <Link className="signup-login-link" to="/login">You already have an account? Login !</Link>
        </div>)
}

export default Signup
