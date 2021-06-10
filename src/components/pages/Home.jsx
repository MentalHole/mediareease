import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Grow } from "@material-ui/core";

import Sidebar from "../Sidebar";
import { Mainpost } from "../Mainpost";

import Postcollection from "../Postcollection";

const Home = () => {
  const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_MOVIEDB_API}&language=ru-RU&page=1`)
            .then(res => setData(res.data.results))
            data.sort((a, b) => {return new Date(b.date) - new Date(a.date);})
    }, [])
    
  return (
    <Grow in>
      <div className="maincontent">
        <div className="posts">
          <Mainpost />
          <div className="postfeed">
            {data.map((posts) => {
              return <div key={posts.id} className="postscollection-item">
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
