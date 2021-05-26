import React from "react";
import { Grow } from "@material-ui/core";

import Sidebar from "../components/Sidebar";
import { Mainpost } from "../components/Mainpost";

import localData from "../data/all.json";
import Pag from "../components/Pagination/Pag";

const Home = () => {
  return (
    <Grow in>
      <div className="maincontent">
        <div className="posts">
          <Mainpost />
          <Pag items={localData} perPage={4}/>
        </div>
        <Sidebar />
      </div>
    </Grow>
  );
}



export default Home;
