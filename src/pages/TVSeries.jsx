import { Grow } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Pag from "../components/Pagination/Pag";
import Sidebar from "../components/Sidebar";
import 'dotenv/config'

export default function TVSeries() {
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)
  console.log(process.env.REACT_APP_MOVIEDB_API);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_MOVIEDB_API}&language=ru-RU&page=1`)
      .then(tv => tv.json())
      .then(
        (result) => {
          setItems(result.results)
        },
        (error) => {
          setError(error)
        }
      )
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
            <Pag items={items} category="tvseries"/>
          </div>
          <Sidebar />
        </div>
      </Grow>
    );
  }
}
