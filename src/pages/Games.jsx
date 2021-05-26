import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Grow } from "@material-ui/core";
import Pag from "../components/Pagination/Pag";
import 'dotenv'

const Games = () => {
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)

  const apiKey = process.env.GAMES_API
  console.log(apiKey)
  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=22b6606069f9478eac87c4e24d8c9629&rating_top&games_count=20&dates=2021-05-01,2021-05-25`)
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result.results)
        }).catch((error) => {
          console.error(error)
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