import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import axios from "axios"
import { faDotCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Header from "../Header"
import Sidebar from "../Sidebar"
import Postcollection from "../Postcollection"

function MovieCollectionDetails() {
  const { id } = useParams()
  const [movie, setMovie] = useState([])
  const [genre, setGenre] = useState([])
  const [items, setItems] = useState([])

  const one = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIEDB_API}&language=ru-RU`
  const two = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIEDB_API}&language=ru-RU&page=1`

  useEffect(() => {
    const requestOne = axios.get(one)

    const requestTwo = axios.get(two)

    axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {

      setMovie(responses[0].data)
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
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
        }}
      >
        <div className="articlecover-gradient">
          <Header />
          <div className="article-wrapper">
            <div className="articleinfo">
              <div className="articleinfo-titles">
                <div className="articleinfo-title">{movie.title}</div>
                <div className="articleinfo-subtitle">{movie.tagline}</div>
                <div className="postmeta articleinfo-meta">
                  <div>{movie.release_date}</div>
                  <FontAwesomeIcon
                    icon={faDotCircle}
                    className="dotseparator"
                  />
                  <div>
                    {genre.map(genres => { return genres.name }).join(', ')}
                  </div>
                </div>
              </div>
              <div className="articleinfo-pop">
                <div
                  className="category movie"
                >
                  <div className="label14">фильмы</div>
                </div>
                <div
                  className="category"
                >
                  <div className="label14">оценка: {movie.vote_average}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="articlecontent-wrapper">
          <div className="articlecontent">
            <p className="articlecontent-intro" style={{ color: "#dc6175" }}>
              {movie.overview}
            </p>
            <div className="articlecontent-meat w-richtext">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, amet! Sed id necessitatibus veritatis ipsa incidunt ipsam fugiat pariatur vitae numquam. Iste quas asperiores, ipsum aut blanditiis earum. Eos neque placeat eum. Qui, voluptatibus.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum magnam ea odio eum, nam recusandae quisquam omnis totam aliquid laboriosam vero? Consectetur, vero ab!
              </p>
            </div>
          </div>
          <div className="other-content">
            {postcollection}
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCollectionDetails
