import React from "react";
import { Link } from "react-router-dom";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Postcollection = ({ post }) => {
  return (
    <Link className="postfeed-item-w" to={"/articles/" + post.article}>
      <div
        style={{
          backgroundImage: `url(${post.poster})`,
        }}
        className={"postfeed-item " + post.category}
      >
        <div className="postfeed-contents">
          <div className="posttopper">
            <div className={"category " + post.category}>
              <div className="label14">{post.type}</div>
            </div>
          </div>
          <div className="postinfo">
            <h2 className="heading-2">{post.title}</h2>
            <div className="subheading">{post.tagline}</div>
            <div className="postmeta">
              <div>{post.date}</div>
              <FontAwesomeIcon
                icon={faDotCircle}
                className="dotseparator"
              />
              <div className="genres">{post.tags}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Postcollection;
