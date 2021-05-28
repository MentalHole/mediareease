import { Grow } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Pag from "../components/Pagination/Pag";
import Sidebar from "../components/Sidebar";

export default function TVSeries() {
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/tv/popular?api_key=fe58163391ed2fec90aeeb769d221a42&language=ru-RU&page=1")
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

  if (error) return <div>Error: {error.message}</div>

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
