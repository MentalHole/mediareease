import React from "react";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Postcollection = ({ post, category }) => {

  if (category === "movie") {
    return <Link className="postfeed-item-w" to={"/articles/" + post.original_title}>
      <div
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${post.poster_path}")`,
        }}
        className={"postfeed-item " + category}
      >
        <div className="postfeed-contents">
          <div className="posttopper">
            <div className={"category " + category}>
              <div className="label14">
                кино
              </div>
            </div>
            <div className={"category"}>
              <div className="label14">
                {post.vote_average}
              </div>
            </div>
          </div>
          <div className="postinfo">
            <h2 className="heading-2">{post.title}</h2>
            <div className="subheading">{post.tagline}</div>
            <div className="postmeta">
              <div>{post.release_date}</div>
              <FontAwesomeIcon
                icon={faDotCircle}
                className="dotseparator"
              />
              <div className="genres">Средняя оценка: {post.vote_average}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  }

  else if (category === "games")
    return (
      <Link className="postfeed-item-w" to={"/articles/" + post.slug}>
        <div
          style={{
            backgroundImage: `url("${post.background_image}")`,
          }}
          className={"postfeed-item " + category}
        >
          <div className="postfeed-contents">
            <div className="posttopper">
              <div className={"category " + category}>
                <div className="label14">
                  игры
                </div>
              </div>
            </div>
            <div className="postinfo">
              <h2 className="heading-2">{post.name}</h2>
              <div className="subheading">Рейтинг Metacritic: {post.metacritic}</div>
              <div className="postmeta">
                <div>{post.released}</div>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  className="dotseparator"
                />
                <div className="genres">
                  {post.genres.map(genre => {
                    return genre.name
                  }).join(", ")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )

  else if (category === "tvseries") {
    return <Link className="postfeed-item-w" to={"/articles/" + post.original_title}>
      <div
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${post.poster_path}")`,
        }}
        className={"postfeed-item " + category}
      >
        <div className="postfeed-contents">
          <div className="posttopper">
            <div className={"category " + category}>
              <div className="label14">
                сериалы
              </div>
            </div>
            <div className="category ">
              <div className="label14">
                {post.vote_average}
              </div>
            </div>
          </div>
          <div className="postinfo">
            <h2 className="heading-2">{post.title}</h2>
            <div className="subheading">{post.tagline}</div>
            <div className="postmeta">
              <div>{post.release_date}</div>
              <FontAwesomeIcon
                icon={faDotCircle}
                className="dotseparator"
              />
              <div className="genres">{post.genre_ids}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  }
  else
    return <Link className="postfeed-item-w" to={"/articles/" + post.original_title}>
      <div
        style={{
          backgroundImage: `url("${post.poster}")`,
        }}
        className={"postfeed-item " + post.category}
      >
        <div className="postfeed-contents">
          <div className="posttopper">
            <div className={"category " + post.category}>
              <div className="label14">{post.category}</div>
            </div>
            <div className="category ">
              <div className="label14">
                {post.votes}
              </div>
            </div>
          </div>
          <div className="postinfo">
            <h2 className="heading-2">{post.name}</h2>
            <div className="subheading">{post.tagline}</div>
            <div className="postmeta">
              <div>{post.release_date}</div>
              <FontAwesomeIcon
                icon={faDotCircle}
                className="dotseparator"
              />
              <div className="genres">{post.genre_ids}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
}

export default Postcollection;
