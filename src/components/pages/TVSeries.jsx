import { Grow } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import 'dotenv/config'
import Postcollection from "../postcollection/Postcollection";

export default function TVSeries() {
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_MOVIEDB_API}&language=ru-RU&page=1`)
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result.results)
        }
      )
      .catch(err => {
        console.log(err)
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
