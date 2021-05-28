import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import ScrollToTop from "react-scroll-to-top"

import "./App.css"
import Header from "./components/Header"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import TVSeries from "./pages/TVSeries"
import Games from "./pages/Games"
import Mediareease from "./pages/Mediareease"
import BetterDays from "./Articles/Movies/BetterDays"
import Footer from "./components/Footer"
import { Switch } from "react-router-dom"
import CollectionDetails from "./Articles/Movies/CollectionDetails"

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="main-wrapper">
          <div className="globalborder left"></div>
          <div className="globalborder right"></div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movies" component={Movies} />
            <Route path="/tvseries" component={TVSeries} />
            <Route path="/games" component={Games} />
            <Route path="/mediareease" component={Mediareease} />
            <Route path="/articles/:id" component={CollectionDetails} />
            <Route path="/articles/better-days" component={BetterDays} />
          </Switch>
          <ScrollToTop smooth color="#dc6175" />
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
