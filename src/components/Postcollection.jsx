import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";

import usePagination from "../hooks/usePagination";

const Postcollection = ({ data, itemsPerPage }) => {
  const { slicedData } = usePagination({ data, itemsPerPage });

  return (
    <div className="posts">
      <div className="postfeed">
        {slicedData.map((item) => (
          <div className="postscollection-item">
            <Link className="postfeed-item-w" to={"/mediareease/articles/" + item.article}>
              <div
                style={{
                  backgroundImage: `url(${item.poster})`,
                }}
                href="/articles/gunda"
                className={"postfeed-item " + item.category}
              >
                <div className="postfeed-contents">
                  <div className="posttopper">
                    <div className={"category " + item.category}>
                      <div className="label14">{item.type}</div>
                    </div>
                  </div>
                  <div className="postinfo">
                    <h2 className="heading-2">{item.title}</h2>
                    <div className="subheading">{item.text}</div>
                    <div className="postmeta">
                      <div>{item.date}</div>
                      <FontAwesomeIcon
                        icon={faDotCircle}
                        className="dotseparator"
                      />
                      <div className="genres">{item.genre}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      
    </div>

  );
}

export default Postcollection;
