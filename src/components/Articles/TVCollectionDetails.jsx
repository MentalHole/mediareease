import React, {useEffect, useState} from "react";
import axios from "axios";
import {faDotCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import Header from "../Header";
import Sidebar from "../Sidebar";
import {useParams} from "react-router";
import Postcollection from "../Postcollection";

function TVCollectionDetails() {
    const {id} = useParams()
    const [tv, setTv] = useState([])
    const [genre, setGenre] = useState([])
    const [items, setItems] = useState([])
    const [network, setNetwork] = useState([])

    const one = `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_MOVIEDB_API}&language=ru-RU`
    const two = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_MOVIEDB_API}&language=ru-RU&page=1`

    useEffect(() => {
        const requestOne = axios.get(one)

        const requestTwo = axios.get(two)

        axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {

            setTv(responses[0].data)
            setGenre(responses[0].data.genres)
            setNetwork(responses[0].data.networks)
            setItems(responses[1].data.results)

        })).catch(errors => {
            console.log("Axios error: ",  errors)
        })
    }, [id])

    const postcollection = items.map((posts) => {
        return (
            <div key={posts.id} className="postscollection-item">
                <Postcollection post={posts}/>
            </div>
        )
    }).slice(0, 2)



    return (
        <div className="article">
            <div
                className="articlecover"
                style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/original${tv.backdrop_path}")`
                }}
            >
                <div className="articlecover-gradient">
                    <Header/>
                    <div className="article-wrapper">
                        <div className="articleinfo">
                            <div className="articleinfo-titles">
                                <div className="articleinfo-title">{tv.name}</div>
                                <div className="articleinfo-subtitle">{tv.tagline}</div>
                                <div className="postmeta articleinfo-meta">
                                    <div>?????????? ???????????? ??????????: {tv.first_air_date}</div>
                                    <FontAwesomeIcon
                                        icon={faDotCircle}
                                        className="dotseparator"
                                    />
                                    <div>{genre.map(genres => {
                                        return genres.name
                                    }).join(', ')}</div>
                                </div>
                            </div>
                            <div className="articleinfo-pop">
                                <div
                                    className="category tvseries"
                                >
                                    <div className="label14">??????????????</div>
                                </div>
                                <div
                                    className="category"
                                >
                                    <div>{network.map(net => {
                                        return net.name
                                    }).slice(0, 1)}</div>
                                </div>
                                <div
                                    className="category"
                                >
                                    <div className="label14">????????????: {tv.vote_average}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="articlecontent-wrapper">
                    <div className="articlecontent">
                        <p className="articlecontent-intro" style={{color: "#af60bc"}}>
                            {tv.overview}
                        </p>
                        <div className="articlecontent-meat w-richtext">
                            <p>
                                ?? ???????????? ?????????????? ?????????? ???????????? ?????????????????????????????? ???????????????????????? ???????????? ???? ?????????? ??????????????
                                ?????????????????? ?? ???????????????????????? ???????? ????????????????. ???? ??????????????, ???????????? ????????????????, ?????? ????????????
                                ???????????????????????? ???????????? ???? ???????????????????????? ?????????????? ???????????????????????? ?????????? ???????????????????? ??????????????????????
                                ???????????????? ??????????????, ???????????????????? ?????????????????????? ?? ?????????????????? ???????????????????????? ??????????. ????????????????????????
                                ???????????????? ????????????????????, ?????? ???????????????????? ???????????????? ?????????????????? ???????? ???????????????????????? ??????????????
                                ?????????????????????? ?? ?????????????????? ???????????????????????? ???????????????????? ?? ???????????????????????????????? ??????????????. ??????????????
                                ?????????????????????? ?????????????? ??????????????, ?? ?????????? ???????????????????? ???????????????????????????? ???????? ?? ?????????? ??????????
                                ???????????????????? ???????????????????????? ?????????? ???????????????????? ?????????????????????? ???????????????? ???????????? ????????????????. ????????????????!
                                ???????????? ???????????????????????? ???????????? ???? ???????????????????????? ?????????????? ?????????????? ???? ?????? ?????????????? ????????????????????
                                ?????????????????????? ????????????????.
                            </p>
                            <p>
                                ????????????????! ?????????????????????? ?????????????????? ?????????????????????? ???????????????????????? ???????????????????? ?? ????????????????????
                                ???????????????????? ?????????????????????? ????????????????. ?????????????????????????? ?? ?????????????? ???????? ?????????????????????? ??????????????????
                                ?????????????????????? ?????????????????? ?????????????????? ???????????? ?????????????? ???? ???????????????????? ???????????????????????? ???????????????????? ??
                                ???????????????????????????????? ??????????????. ?? ???????????? ?????????????? ???????????????????? ???????????????? ?????????????????? ????????
                                ???????????????????????? ???????????? ???? ?????????? ?????????????? ?????????????????? ?? ???????????????????????? ?????????????????????????????? ??????????????
                                ??????????????????????. ?? ???????????? ?????????????? ???????????????????? ??????????????????????????-???????????????????????????????? ??????????????????????
                                ?????????? ???????????????????????? ???????????????????????? ???????????????? ?????????? (????????????????????????) ?????????????? ?? ????????????????????????
                                ???????????????????????? ???????????????????? ?? ???????????????????????????????? ??????????????. ???????????? ??????????????????????, ?? ?????????????????????? ????
                                ?????????? ???????????? ?????????????????????????????? ???????????????????????? ???????????? ???????????? ???????? ?? ???????????????????????? ??????????????????????
                                ???????????????????????????? ????????????????. ???? ??????????????, ???????????? ????????????????, ?????? ???????????????????? ???????????????????? ????????????????
                                ?????????????? ???????????? ???? ?????????? ?????????????? ?????????????????? ?? ???????????????????????? ?????????????????????? ????????????????????????????
                                ????????????????.</p>
                        </div>
                    </div>
                    <div className="other-content">
                        {postcollection}
                        <Sidebar/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TVCollectionDetails;
