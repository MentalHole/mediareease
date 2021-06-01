import React, { useEffect, useState } from "react";
import axios from "axios";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "../Header";
import Sidebar from "../Sidebar";
import localData from "../../data/all.json";
import { useParams } from "react-router";
import Postcollection from "../Postcollection";

function TVCollectionDetails() {
  const { id } = useParams()
  const [tv, setTv] = useState([])
  const [genre, setGenre] = useState([])
  const [items, setItems] = useState([])

  const one = `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_MOVIEDB_API}&language=ru-RU`
  const two = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_MOVIEDB_API}&language=ru-RU&page=1`

  useEffect(() => {
    const requestOne = axios.get(one)

    const requestTwo = axios.get(two)

    axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {

      setTv(responses[0].data)
      setGenre(responses[0].data.genres)
      setItems(responses[1].data.results)

    })).catch(errors => {
      console.log(errors)
    })
  }, [id])
  const postcollection = items.map((posts) => {
    return (
      <div key={posts.id} className="postscollection-item">
        <Postcollection post={posts} />
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
          <Header />
          <div className="article-wrapper">
            <div className="articleinfo">
              <div className="articleinfo-titles">
                <div className="articleinfo-title">{tv.name}</div>
                <div className="articleinfo-subtitle">{tv.tagline}</div>
                <div className="postmeta articleinfo-meta">
                  <div>Выход первой серий: {tv.first_air_date}</div>
                  <FontAwesomeIcon
                    icon={faDotCircle}
                    className="dotseparator"
                  />
                  <div>{genre.map(genres => { return genres.name }).join(', ')}</div>
                </div>
              </div>
              <div className="articleinfo-pop">
                <div
                  className="category tvseries"
                >
                  <div className="label14">сериалы</div>
                </div>
                <div
                  className="category"
                >
                  <div className="label14">оценка: {tv.vote_average}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="articlecontent-wrapper">
          <div className="articlecontent">
            <p className="articlecontent-intro" style={{ color: "#af60bc" }}>
              {tv.overview}
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
            {postcollection}
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TVCollectionDetails;
