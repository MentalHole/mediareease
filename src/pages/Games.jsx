import React from "react";
import Pag from "../components/Pag";
import Postcollection from "../components/Postcollection";
import Sidebar from "../components/Sidebar";
import data from "../data/games.json";

export default function Games() {
  return (
    <div className="maincontent">
      <div className="posts">
        <div className="categorypage games">Игры</div>

        <Postcollection data={data} itemsPerPage={8} startFrom={1} />
        
        <Pag data={data} startFrom={1}/>
      </div>
      <Sidebar />
    </div>
  );
}
