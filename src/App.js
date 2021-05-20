import React from "react"
import "./App.css"
import Header from "./components/Header"

import ScrollToTop from "react-scroll-to-top"

import { BrowserRouter as Router, Route } from 'react-router-dom'
import BetterDays from "./Articles/Movies/BetterDays"
import Minari from "./Articles/Movies/Minari"
import Gunda from "./Articles/Movies/Gunda"

export default function App() {
  return (
    <Router>
      <div className="app">
        <div className="main-wrapper">
          <div className="globalborder left"></div>
          <div className="globalborder right"></div>
          <Header />
          <Route path="/mediareease/articles/better-days" component={BetterDays} />
          <Route path="/mediareease/articles/minari" component={Minari} />
          <Route path="/mediareease/articles/gunda" component={Gunda} />
          <ScrollToTop smooth color="#dc6175"/>
        </div>
      </div>
    </Router>
  );
}
