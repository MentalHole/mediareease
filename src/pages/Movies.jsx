import React from "react";
import Postcollection from "../components/Postcollection";
import Sidebar from "../components/Sidebar";
import movies from "../data/movies.json";

export default function Movies() {
  return (
    <div className="maincontent">
      <div className="posts">
        <div className="categorypage">Фильмы</div>
        <div className="postfeed">
          {movies.map((post) => {
            return <div key={post.id} className="postscollection-item">
              <Postcollection post={post} />
            </div>
          })}
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
