import React, { Suspense, lazy } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Switch } from "react-router-dom"
import ScrollToTop from "react-scroll-to-top"

import "./App.css"
import Header from "./components/Header"
import Home from "./components/pages/Home"
import Movies from "./components/pages/Movies"
import TVSeries from "./components/pages/TVSeries"
import Games from "./components/pages/Games"
import Mediareease from "./components/pages/Mediareease"
import BetterDays from "./components/Articles/Movies/BetterDays"
import Footer from "./components/Footer"
import CollectionDetails from "./components/Articles/Movies/CollectionDetails"

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
            <Route path="/mediareeases" component={Mediareease} />
            <Route path="/articles/better-days" component={BetterDays} />
            <Route path="/articles/:id" component={CollectionDetails} />
          </Switch>
          <ScrollToTop smooth color="#dc6175" />
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
