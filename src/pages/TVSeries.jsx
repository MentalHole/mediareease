import React, { useState, useEffect } from "react";
import Pag from "../components/Pag";
import Postcollection from "../components/postcollection/Postcollection";
import Sidebar from "../components/Sidebar";

export default function TVSeries() {
  const [items, setItems] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/tv/popular?api_key=fe58163391ed2fec90aeeb769d221a42&language=ru-RU&page=1")
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

  if(error) return <div>Error: {error.message}</div>
  else if (!isLoaded) {
    return (
      <div className="maincontent">
        <div className="posts">
          <div className="categorypage tvseries">Сериалы</div>
          <div className="postfeed">Loading</div>
        </div>
        <Sidebar />
      </div>)
  } else {
    return (
      <div className="maincontent">
        <div className="posts">
          <div className="categorypage tvseries">Сериалы</div>
            {/* {items.map((post) => {
              return <div key={post.id} className="postscollection-item">
                <Postcollection post={post} category="tvseries" />
              </div>
            })} */}
            <Pag data={items} category="tvseries"/>
        </div>
        <Sidebar />
      </div>
    );
  }
}
