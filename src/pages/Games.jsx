import React from "react";
import Postcollection from "../components/Postcollection";
import Sidebar from "../components/Sidebar";
import games from "../data/games.json";

export default function Games() {
  return (
    <div className="maincontent">
      <div className="posts">
        <div className="categorypage games">Игры</div>
        <div className="postfeed">
          {games.map((post) => {
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
