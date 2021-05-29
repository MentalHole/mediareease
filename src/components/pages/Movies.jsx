import React, { useState, useEffect } from "react"
import { Grow } from "@material-ui/core"

import Sidebar from "../Sidebar"
import Postcollection from "../postcollection/Postcollection"

export default function Movies() {
  const [error, setError] = useState(null)
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIEDB_API}&language=ru-RU`)
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result.results)
        }
      )
  }, [])

  if (error) {
    return <div className="maincontent">
      <div className="posts">
        <div className="categorypage movie">Фильмы</div>
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
            <div className="categorypage">Фильмы</div>
            <div className="postfeed">
              {items.map((posts) => {
                return <div key={posts.id} className="postscollection-item">
                  <Postcollection category="movie" post={posts} />
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
