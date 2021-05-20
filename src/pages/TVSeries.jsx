import React from "react";
import Pag from "../components/Pag";
import Postcollection from "../components/Postcollection";
import Sidebar from "../components/Sidebar";
import data from "../data/tvseries.json";

export default function TVSeries() {
  return (
    <div className="maincontent">
      <div className="posts">
        <div className="categorypage tvseries">Сериалы</div>

        <Postcollection data={data} itemsPerPage={8}/>
        <Pag data={data} startFrom={1}/>
      </div>
      <Sidebar />
    </div>
  );
}
