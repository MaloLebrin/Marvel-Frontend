import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from "./pages/Home"
import Comics from "./pages/Comics"
import './App.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/character/:id">
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
