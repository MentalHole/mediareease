import { Grow } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Pag from "../components/Pag";
import Postcollection from "../components/postcollection/Postcollection";
import Sidebar from "../components/Sidebar";

export default function Movies() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=fe58163391ed2fec90aeeb769d221a42&language=ru-RU")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
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
  } else if (!isLoaded) {
    return (
      <div className="maincontent">
        <div className="posts">
          <div className="categorypage">Фильмы</div>
          <div className="postfeed">Loading</div>
        </div>
        <Sidebar />
      </div>
    )
  } else {
    return (
      <div className="maincontent">
        <div className="posts">
          <div className="categorypage">Фильмы</div>
          {/* {items.map(post => {
              return <div key={post.id} className="postscollection-item">
                <Postcollection post={post} category="movie" />
              </div>
            })} */}
          <Pag data={items} />
        </div>
        <Sidebar />
      </div>
    );
  }
}
