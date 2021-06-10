import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Grow } from "@material-ui/core";

import Sidebar from "../Sidebar";
import Postcollection from "../Postcollection";

const Games = () => {
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_GAME_API}&dates=2021-05-01,2021-05-25&metacritic=60,100&ordering=-released&platforms=18,1,7'`)
      .then(res => {
        setItems(res.data.results)
      })
      .catch(err => setError(err))
  }, [])

  if (error) {
    return <div className="maincontent">
      <div className="posts">
        <div className="categorypage games">Игры</div>
        <h1>Ошибка: {error.message}</h1>
      </div>
      <Sidebar />
    </div>
  }

  else {
    return (
      <Grow in>
        <div className="maincontent">
          <div className="posts">
            <div className="categorypage games">Игры</div>
            <div className="postfeed">
              {items.map((posts) => {
                return <div key={posts.id} className="postscollection-item">
                  <Postcollection category="games" post={posts} />
                </div>
              })}
            </div>
          </div>
          <Sidebar />
        </div>
      </Grow>
    );
  }
}

export default Games