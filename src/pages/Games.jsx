import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Grow } from "@material-ui/core";
import Pag from "../components/Pagination/Pag";
import 'dotenv/config'

const Games = () => {
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)
  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_GAME_API}&dates=2021-05-01,2021-05-25&platforms=18,1,7'`)
      .then(gm => gm.json())
      .then(
        (result) => {
          setItems(result.results)
        },
        (error) => {
          setError(error)
        })

  }, [])

  if (error) return <div>Error: {error}</div>

  else {
    return (
      <Grow in>
        <div className="maincontent">
          <div className="posts">
            <div className="categorypage games">Игры</div>
            <Pag items={items} category="games" />
          </div>
          <Sidebar />
        </div>
      </Grow>
    );
  }
}

export default Games