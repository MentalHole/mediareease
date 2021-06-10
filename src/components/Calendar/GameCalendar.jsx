import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './Calendar.css'
import Postcollection from '../Postcollection'
import Sidebar from '../Sidebar'

const GameCalendar = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)
        axios.get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_GAME_API}&dates=2021-05-01,2021-05-31&platforms=18,1,7'&metacritic=70,100&ordering=released`)
            .then(res => setData(res.data.results))
    }, [])

    const post = data.map(posts => {
        return <li key={posts.id} className={posts.name === "Resident Evil: Village" ? "calendaritem fat" : "calendaritem"} style={{ backgroundImage: `url("${posts.background_image}")` }}>
            <div className="calendar-gradient">
                <span>{(posts.released)}</span>
                <strong className="calendar-title " style={{color: "#a7b12e"}}>
                    <div className="label18" style={{ textTransform: "initial"}}>{posts.name}</div>
                    <div className="label14" style={{ textTransform: "initial", color: "#222"}}>{posts.platforms.map(plat => { return plat.platform.name }).join(', ')}</div>
                    <div className="label14" style={{ textTransform: "capitalize" }}>{posts.genres.map(genre => { return genre.name }).join(', ')}</div>
                </strong>
            </div>
        </li>
    })

    const app = [...Array(6)].map((e, i) => <li key={i} className="calendaritem" style={{ backgroundImage: `url("https://cdn.game.net/image/upload/w_750,f_auto,q_auto/v1/game_img/merch2021/Sony/Accessories/PS-Controllers-E.jpg")` }}>
        <div className="calendar-gradient">
            <span style={{ color: "transparent" }}>10</span>
        </div>
    </li>)
    return (
        <div className="calendar">
            <div className="calendarcontent">
                <div className="categorypage games">Май</div>
                <ul className="calendarfeed">
                    {app}
                    {post}
                    {app}
                </ul>
            </div>
            <div className="articlecontent-wrapper">
                <div className="articlecontent">
                    <div className="articlecontent-meat">
                        {data.map(posts => {
                            return <p>
                                <strong style={{ color: "#a7b12e" }}>{posts.name}</strong> - Metacritic: {posts.metacritic}
                                <br />
                                <strong>Жанр</strong>: {posts.genres.map(genre => { return genre.name }).join(', ')}
                                <br />
                                <strong>Скриншоты</strong>:
                                    <figure style={{ display: "flex", flexDirection: "column", }}>
                                    {posts.short_screenshots.map(screenshot => {
                                        return <img key={screenshot.id}
                                            src={screenshot.image}
                                            loading="eager"
                                            alt="game_screnshots"
                                            className="game-screenshot"
                                            style={{ cursor: "pointer", borderRadius: 12, width: "100%", height: 540 }}
                                        />
                                    })}
                                </figure>
                            </p>
                        })}

                    </div>
                </div>
                <div className="other-content">
                    {data
                        .map((post) => {
                            return <div key={post.id} className="postscollection-item"><Postcollection post={post} /></div>
                        })
                        .slice(2, 4)}
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}

export default GameCalendar
