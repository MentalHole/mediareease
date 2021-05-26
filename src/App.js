import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import ScrollToTop from "react-scroll-to-top"

import "./App.css"
import Header from "./components/Header"
import BetterDays from "./Articles/Movies/BetterDays"
import Gunda from "./Articles/Movies/Gunda"
import Footer from "./components/Footer"

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="main-wrapper">
          <div className="globalborder left"></div>
          <div className="globalborder right"></div>
          <Header />
          <Route path="/articles/gunda" component={Gunda} />
          <Route path="/articles/better-days" component={BetterDays} />
          <Route path="/articles/movies-05-21" component={BetterDays} />
          <ScrollToTop smooth color="#dc6175" />
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
