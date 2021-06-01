import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Grow } from "@material-ui/core";

import Sidebar from "../Sidebar";
import Postcollection from "../Postcollection";

export default function TVSeries() {
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_MOVIEDB_API}&language=ru-RU&page=1`)
      .then(
        (result) => {
          setItems(result.data.results)
        }
      )
      .catch(err => {
        setError(err)
      })
  }, [])

  if (error) {
    return <div className="maincontent">
      <div className="posts">
        <div className="categorypage tvseries">Сериалы</div>
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
            <div className="categorypage tvseries">Сериалы</div>
            <div className="postfeed">
              {items.map((posts) => {
                return <div key={posts.id} className="postscollection-item">
                  <Postcollection category="tvseries" post={posts} />
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
