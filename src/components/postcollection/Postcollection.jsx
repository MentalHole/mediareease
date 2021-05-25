import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Postcollection = ({ category, post, poster }) => {
  
  return (
    <Link className="postfeed-item-w" to={"/articles/" + post.original_title}>
      <div
        style={{
          backgroundImage: `url("${poster?post.poster:`https://image.tmdb.org/t/p/original${post.poster_path}`}")`,
        }}
        className={"postfeed-item " + category}
      >
        <div className="postfeed-contents">
          <div className="posttopper">
            <div className={"category " + category}>
              <div className="label14">
                {category === "movie"?"кино":""}
                {category === "games"?"игры":""}
                {category === "tvseries"?"сериалы":""}
              </div>
            </div>
          </div>
          <div className="postinfo">
            <h2 className="heading-2">{post.title || post.name}</h2>
            <div className="subheading">{post.tagline}</div>
            <div className="postmeta">
              <div>{post.release_date || post.first_air_date}</div>
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
  );
}

export default Postcollection;
