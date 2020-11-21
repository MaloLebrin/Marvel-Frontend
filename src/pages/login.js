import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import "../scss/signup.scss"



const Login = ({ token, setUserToken }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState()
    const history = useHistory()


    const onSubmit = async (event) => {
        try {
            event.preventDefault();
            const response = await axios.post(
                "http://localhost:3001/user/login",
                {
                    email: email,
                    password: password,
                })
            if (response.data.token) {
                setUserToken(response.data.token)
                console.log(response.data.token);
                history.push("/")
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setErrorMessage("Mauvais email et/ou mot de passe");
            }
        }
    }

    return (
        <div id="signupLoginPage" className="signup-wrapper">
            <h2>Se connecter</h2>
            <form onSubmit={onSubmit} className="signup-form">
                <input
                    onChange={(event) => {
                        setEmail(event.target.value);
                        setErrorMessage("");
                    }}
                    placeholder="Adresse email"
                    type="email"
                />
                <input
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                    placeholder="Mot de passe"
                    type="password"
                />
                <span className="signup-login-error-message">{errorMessage}</span>

                <button type="submit">
                    Se connecter
                        </button>
            </form>
            <Link className="signup-login-link" to="/signup">You do not have an account? Signup</Link>
        </div>)
}

export default Login
