import React, { useState, useEffect } from "react"
import { Grow } from "@material-ui/core"
import Pag from "../components/Pagination/Pag"
import Sidebar from "../components/Sidebar"

export default function Movies() {
  const [error, setError] = useState(null)
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=fe58163391ed2fec90aeeb769d221a42&language=ru-RU")
      .then(mov => mov.json())
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
            <div className="categorypage">Фильмы</div>
            <Pag items={items} category="movie" perPage={8} />
          </div>
          <Sidebar />
        </div>
      </Grow>
      
    );
  }
}
