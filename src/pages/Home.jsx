import React, { useState, useEffect } from "react";

import Sidebar from "../components/Sidebar";
import Postcollection from "../components/postcollection/Postcollection";
import { Mainpost } from "../components/Mainpost";
import Pag from "../components/Pag";

import data from "../data/all.json";

const Home = () => {
  const poster = true
  return (
    <div className="maincontent">
      <div className="posts">
        <Mainpost />
        <div className="postfeed">
          <div className="postscollection-item">
            <Postcollection post={data[0]} poster={poster} category="movie" />
          </div>
          <div className="postscollection-item">
            <Postcollection post={data[1]} poster={poster} category="games" />
          </div>
          <div className="postscollection-item">
            <Postcollection post={data[2]} poster={poster} category="games" />
          </div>
          <div className="postscollection-item">
            <Postcollection post={data[3]} poster={poster} category="tvseries" />
          </div>
        </div>
        <Pag data={data} poster={poster} category="movie"/>
      </div>
      <Sidebar />
    </div>
  );
}



export default Home;
