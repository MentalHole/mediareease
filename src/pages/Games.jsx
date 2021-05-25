import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import PostcollectionGames from "../components/postcollection/PostcollectionGames";

const Games = () => {
  const [items, setItems] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://api.rawg.io/api/games?key=22b6606069f9478eac87c4e24d8c9629&rating_top&games_count=20&dates=2021-05-01,2021-05-25")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result.results)
        }).catch((error) => {
          console.error(error)
        })
  }, [])

  if (error) return <div>Error: {error}</div>
  else if (!isLoaded)
    return (<div className="maincontent">
      <div className="posts">
        <div className="categorypage games">Игры</div>
        <div className="postfeed">Loading</div>
      </div>
      <Sidebar />
    </div>)

  else {
    return (
      <div className="maincontent">
        <div className="posts">
          <div className="categorypage games">Игры</div>
          <div className="postfeed">
            {items.map((post) => {
              return <div key={post.id} className="postscollection-item">
                <PostcollectionGames post={post} category="games" />
              </div>
            })}
          </div>
        </div>
        <Sidebar />
      </div>
    );
  }
}

export default Games