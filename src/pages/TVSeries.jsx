import React from "react";
import Postcollection from "../components/Postcollection";
import Sidebar from "../components/Sidebar";
import tvseries from "../data/tvseries.json";

export default function TVSeries() {
  return (
    <div className="maincontent">
      <div className="posts">
        <div className="categorypage tvseries">Сериалы</div>
        <div className="postfeed">
          {tvseries.map((post) => {
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
