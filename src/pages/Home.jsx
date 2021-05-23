import React from "react";

import Sidebar from "../components/Sidebar";
import Postcollection from "../components/Postcollection";
import { Mainpost } from "../components/Mainpost";
import movies from "../data/movies.json";
import Pag from "../components/Pag";

const Home = () => {

  return (
    <div className="maincontent">
      <div className="posts">
        <Mainpost />
        <div className="postfeed">
          {movies.map((post) => {
            return <div key={post.id} className="postscollection-item">
              <Postcollection post={post} />
            </div>
          })}
        </div>
        <Pag />
      </div>
      <Sidebar />
    </div>
  );
}

export default Home;
