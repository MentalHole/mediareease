import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { faDotCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Header from "../Header"
import Sidebar from "../Sidebar"
import localData from "../../data/all.json"
import Postcollection from "../Postcollection"

const GameCollectionDetails = () => {
    const { id } = useParams()
    const [game, setGame] = useState([])
    const [genre, setGenre] = useState([])
    const [developers, setDevelopers] = useState([])

    useEffect(() => {
        axios
            .get(
                `https://api.rawg.io/api/games/${id}?key=${process.env.REACT_APP_GAME_API}`
            )
            .then((res) => {
                setGame(res.data)
                setGenre(res.data.genres)
                setDevelopers(res.data.developers)
            })
    }, [])
    return (
        <div className="article">
            <div
                className="articlecover"
                style={{
                    backgroundImage: `url(${game.background_image_additional})`
                }}
            >
                <div className="articlecover-gradient">
                    <Header />
                    <div className="article-wrapper">
                        <div className="articleinfo">
                            <div className="articleinfo-titles">
                                <div className="articleinfo-title">{game.name}</div>
                                <div className="articleinfo-subtitle">by {developers.map(dev => {return dev.name})}</div>
                                <div className="postmeta articleinfo-meta">
                                    <div>{game.released}</div>
                                    <FontAwesomeIcon
                                        icon={faDotCircle}
                                        className="dotseparator"
                                    />
                                    <div>{genre.map(genres => { return genres.name }).join(', ')}</div>
                                </div>
                            </div>
                            <div className="articleinfo-pop">
                                <div
                                    className="category games"
                                >
                                    <div className="label14">игры</div>
                                </div>
                                <div
                                    className="category"
                                >
                                    <div className="label14">Metacritic: {game.metacritic}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="articlecontent-wrapper">
                    <div className="articlecontent">
                        <p className="articlecontent-intro" style={{ color: "#a7b12e" }}>
                            {(game.description_raw)}
                        </p>
                        <div className="articlecontent-meat w-richtext">
                            <p>
                                С другой стороны новая модель организационной деятельности влечет за собой процесс внедрения и модернизации форм развития. Не следует, однако забывать, что начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности требуют определения и уточнения существенных финансовых и административных условий. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки модели развития. Товарищи! начало повседневной работы по формированию позиции требуют от нас анализа дальнейших направлений развития.
                </p>
                            <p>
                                Товарищи! сложившаяся структура организации способствует подготовки и реализации дальнейших направлений развития. Разнообразный и богатый опыт сложившаяся структура организации позволяет выполнять важные задания по разработке существенных финансовых и административных условий. С другой стороны дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации соответствующий условий активизации. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий. Задача организации, в особенности же новая модель организационной деятельности играет важную роль в формировании направлений прогрессивного развития. Не следует, однако забывать, что реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации направлений прогрессивного развития.</p>
                        </div>
                    </div>
                    <div className="other-content">
                        {localData.map((posts) => {
                            return <div key={posts.id} className="postscollection-item">
                                <Postcollection post={posts} />
                            </div>
                        }).slice(0, 2)}
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameCollectionDetails
