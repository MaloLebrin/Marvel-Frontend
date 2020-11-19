import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Cookies from "js-cookie";
import Login from "./pages/login"
import Signup from "./pages/Signup"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from "./pages/Home"
import Comics from "./pages/Comics"
import Favorites from "./pages/Favorites"
import OneCharacter from "./pages/OneCharacter"
import './App.scss';

const App = () => {
  const [token, setToken] = useState(Cookies.get('userToken') || null);
  console.log('token', token);
  const setUserToken = (token) => {
    if (token) {
      Cookies.set('userToken', token, { expires: 7 });
      setToken(token)
    } else {
      setToken(null)
      Cookies.remove('userToken');
    }
  }

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/favs">
          <Favorites token={token} />
        </Route>
        <Route path="/signup">
          <Signup setUserToken={setUserToken} />
        </Route>
        <Route path="/login">
          <Login setUserToken={setUserToken} />
        </Route>
        <Route path="/character/:id">
          <OneCharacter />
        </Route>
        <Route path="/comics">
          <Comics />
        </Route>
        <Route path="/" >
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router >
  );
}

export default App;
