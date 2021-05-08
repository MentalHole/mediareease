import React from "react";
import "./App.css";
import Header from "./components/Header";

import { BrowserRouter as Router, Route } from 'react-router-dom'
import BetterDays from "./Articles/Movies/BetterDays";
import Minari from "./Articles/Movies/Minari";

export default function App() {
  return (
    <Router>
      <div className="app">
        <div className="main-wrapper">
          <div className="globalborder left"></div>
          <div className="globalborder right"></div>
          <Header />
          <Route path="/articles/better-days" component={BetterDays} />
          <Route path="/articles/minari" component={Minari} />
        </div>
      </div>
    </Router>
  );
}
