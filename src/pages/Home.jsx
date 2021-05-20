import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Postcollection from "../components/Postcollection";
import movies from "../data/movies.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Pag from "../components/Pag";

function Home() {
  const [data] = useState(movies);

  return (
    <div className="maincontent">
      <div className="posts">
        <Link
          className="main-post"
          to="/mediareease/articles/better-days"
        >
          <div className="posttopper toppost">
            <div
              className="category movie"
              style={{ backgroundColor: `#222` }}
            >
              <div className="label14">кино</div>
            </div>
          </div>
          <div className="mainpost-preview">
            <div className="postinfo">
              <h2 className="heading-2 toppost">Лучшие дни</h2>
              <div className="subheading toppost">Детсво с синяками</div>
              <div className="postmeta">
                <div>23.04.2021</div>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  className="dotseparator"
                />
                <div className="genres">триллер, драма</div>
              </div>
            </div>
            <div className="latestpost-thumbnail">
              <div
                className="tracecover"
                style={{
                  backgroundImage: `url("https://uploads-ssl.webflow.com/5fec690c2d254248671fe526/60825a7765660f2df4b448b7_cover_trace.png")`,
                }}
              ></div>
            </div>
          </div>
        </Link>
        <Postcollection data={data} itemsPerPage={4} />
        <Pag data={data} itemsPerPage={4} startFrom={1} />
      </div>
      <Sidebar />
    </div>
  );
}

export default Home;
