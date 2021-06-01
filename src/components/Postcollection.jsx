import React from "react";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useHistory } from "react-router-dom";

const Postcollection = ({ post }) => {
  const history = useHistory()

  if (post.release_date) {
    const openPost = () => {
      history.push(`/articles/movie/${post.id}`)
      window.scrollTo(0, 0)
    }
    return <Link onClick={openPost} className="postfeed-item-w" to={`/articles/movie/${post.id}`}>
      <div
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/w500/${post.poster_path}")`,
        }}
        className={"postfeed-item movie"}
      >
        <div className="postfeed-contents">
          <div className="posttopper">
            <div className={"category movie"}>
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
              <div className="genres">{post.original_title}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  }

  if (post.released) {
    const openPost = () => {
      history.push(`/articles/games/${post.id}`)
      window.scrollTo(0, 0)
    }
    return (
      <Link onClick={openPost} className="postfeed-item-w" to={`/articles/games/${post.id}`}>
        <div
          style={{
            backgroundImage: `url("${post.background_image}")`,
          }}
          className={"postfeed-item games"}
        >
          <div className="postfeed-contents">
            <div className="posttopper">
              <div className={"category games"}>
                <div className="label14">
                  игры
                </div>
              </div>
              <div className="category">
                <div className="label14">
                  {post.metacritic}
                </div>
              </div>
            </div>
            <div className="postinfo">
              <h2 className="heading-2">{post.name}</h2>
              <div className="subheading"></div>
              <div className="postmeta">
                <div>{post.released}</div>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  className="dotseparator"
                />
                <div className="genres">
                  {post.genres ? post.genres.map(genre => {
                    return genre.name
                  }).join(", ") : ''}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }
  if (post.first_air_date) {
    const openPost = () => {
      history.push(`/articles/tvseries/${post.id}`)
      window.scrollTo(0, 0)
    }
    return <Link onClick={openPost} className="postfeed-item-w" to={`/articles/tvseries/${post.id}`}>
      <div
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/w500/${post.poster_path}")`,
        }}
        className={"postfeed-item tvseries"}
      >
        <div className="postfeed-contents">
          <div className="posttopper">
            <div className={"category tvseries"}>
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
            <h2 className="heading-2">{post.name}</h2>
            <div className="subheading">{post.tagline}</div>
            <div className="postmeta">
              <div>{post.first_air_date}</div>
              <FontAwesomeIcon
                icon={faDotCircle}
                className="dotseparator"
              />
              <div className="genres">{post.original_name}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  }
  // else {
  //   return <Link className="postfeed-item-w" to={`/articles/better-days`}>
  //     <div
  //       style={{
  //         backgroundImage: `url("${post.poster}")`,
  //       }}
  //       className={"postfeed-item " + post.category}
  //     >
  //       <div className="postfeed-contents">
  //         <div className="posttopper">
  //           <div className={"category " + post.category}>
  //             <div className="label14">{post.type}</div>
  //           </div>
  //           <div className="category ">
  //             <div className="label14">
  //               {post.votes}
  //             </div>
  //           </div>
  //         </div>
  //         <div className="postinfo">
  //           <h2 className="heading-2">{post.name}</h2>
  //           <div className="subheading">{post.tagline}</div>
  //           <div className="postmeta">
  //             <div>{post.release_date}</div>
  //             <FontAwesomeIcon
  //               icon={faDotCircle}
  //               className="dotseparator"
  //             />
  //             <div className="genres">{post.genre_ids}</div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </Link>
  // }
}

export default Postcollection;
