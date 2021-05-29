import React from "react";
import { Grow } from "@material-ui/core";

import Sidebar from "../Sidebar";
import { Mainpost } from "../Mainpost";

import localData from "../../data/all.json";
import Postcollection from "../postcollection/Postcollection";

const Home = () => {
  return (
    <Grow in>
      <div className="maincontent">
        <div className="posts">
          <Mainpost />
          <div className="postfeed">
            {localData.map((posts) => {
              return <div className="postscollection-item">
                <Postcollection post={posts} />
              </div>
            })}
          </div>
        </div>
        <Sidebar />
      </div>
    </Grow>
  );
}



export default Home;
