import React from "react";
import { Link } from "react-router-dom";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostcollectionGames = ({ category, post }) => {

    return (
        <Link className="postfeed-item-w" to={"/articles/" + post.original_title}>
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
                                {category === "movie" ? "кино" : ""}
                                {category === "games" ? "игры" : ""}
                                {category === "tvseries" ? "сериалы" : ""}
                            </div>
                        </div>
                    </div>
                    <div className="postinfo">
                        <h2 className="heading-2">{post.name}</h2>
                        <div className="subheading">{post.tagline}</div>
                        <div className="postmeta">
                            <div>{post.released}</div>
                            <FontAwesomeIcon
                                icon={faDotCircle}
                                className="dotseparator"
                            />
                            <div className="genres">
                                {post.genres.map(
                                    gen => { return gen.name }).join(', ')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default PostcollectionGames;
