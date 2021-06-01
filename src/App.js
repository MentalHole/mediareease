import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Switch } from "react-router-dom"
import ScrollToTop from "react-scroll-to-top"

import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/pages/Home"
import Movies from "./components/pages/Movies"
import TVSeries from "./components/pages/TVSeries"
import Games from "./components/pages/Games"
import Mediareease from "./components/pages/Mediareease"
import BetterDays from "./components/Articles/BetterDays"
import MovieCollectionDetails from "./components/Articles/MovieCollectionDetails"
import TVCollectionDetails from "./components/Articles/TVCollectionDetails"
import GameCollectionDetails from "./components/Articles/GameCollectionDetails"
import MediareeaseCalendar from "./components/MediareeaseCalendar"

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
            <Route path="/movie" component={Movies} />
            <Route
              path="/articles/movie/:id"
              component={MovieCollectionDetails}
            />
            <Route path="/tvseries" component={TVSeries} />
            <Route
              path="/articles/tvseries/:id"
              component={TVCollectionDetails}
            />
            <Route path="/games" component={Games} />
            <Route
              path="/articles/games/:id"
              component={GameCollectionDetails}
            />
            <Route path="/mediareeases" component={Mediareease} />
            <Route path="/articles/better-days" component={BetterDays} />
            <Route path="/articles/movies-05-21" component={MediareeaseCalendar} />
          </Switch>
          <ScrollToTop smooth color="#dc6175" />
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
