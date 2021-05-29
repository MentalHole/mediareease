import React, { useEffect, useState, Suspense, lazy } from "react";
import { Grow } from "@material-ui/core";

import Sidebar from "../Sidebar";
import Postcollection from "../postcollection/Postcollection";
// const Postcollection = React.lazy(() => import("../postcollection/Postcollection.jsx"))

const Games = () => {
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_GAME_API}&dates=2021-05-01,2021-05-25&platforms=18,1,7'`)
      .then(gm => gm.json())
      .then(
        (result) => {
          setLoading(true)
          setItems(result.results)
        },
        (error) => {
          setError(error)
        })

  }, [])

  if (error) return <div>Error: {error}...</div>

  else {
    return (
      <Grow in>
        <div className="maincontent">
          <div className="posts">
            <div className="categorypage games">Игры</div>
            <div className="postfeed">
              <Suspense fallback={<div>Loading...</div>}>
                {items.map((posts) => {
                  return <div key={posts.id} className="postscollection-item">
                    <Postcollection category="games" post={posts} />
                  </div>
                })}
              </Suspense>
            </div>
          </div>
          <Sidebar />
        </div>
      </Grow>
    );
  }
}

export default Games