import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faFilm,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import { Grow } from "@material-ui/core";

function Mediareease() {
  return (
    <Grow in>
      <div className="maincontent">
        <div className="posts">
          <div className="categorypage mediareease">Релизы</div>
          <div role="list" className="postfeed">
            <div role="listitem" className="postscollection-item">
              <Link
                to="/articles/movies-05-21"
                className="postfeed-item-w"
              >
                <div
                  style={{
                    backgroundImage: `url("//thumbnails.moviemania.io/phone/movie/600348/411e21/670x1192.jpg")`,
                  }}
                  className="postfeed-item mediareease"
                >
                  <div className="postfeed-contents">
                    <div className="posttopper">
                      <FontAwesomeIcon
                        icon={faFilm}
                        className="reacticon"
                      />
                    </div>
                    <div className="postinfo">
                      <h2 className="heading-2">Фильмы</h2>
                      <div className="subheading">Май</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div role="listitem" className="postscollection-item">
              <Link
                to="/mediareease/movies"
                className="postfeed-item-w"
              >
                <div
                  style={{
                    backgroundImage: `url("https://cdn.shazoo.ru/487690_WSLSLnQTSK_loki.jpg")`,
                  }}
                  className="postfeed-item mediareease"
                >
                  <div className="postfeed-contents">
                    <div className="posttopper">
                      <FontAwesomeIcon
                        icon={faDesktop}
                        className="reacticon"
                      />
                    </div>
                    <div className="postinfo">
                      <h2 className="heading-2">Сериалы</h2>
                      <div className="subheading">Май</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div role="listitem" className="postscollection-item">
              <Link
                to="/mediareease/tvseries"
                className="postfeed-item-w"
              >
                <div
                  style={{
                    backgroundImage: `url("https://www.soyuz.ru/public/uploads/files/3/7451126/2020111911281222f644872f.jpg")`,
                  }}
                  className="postfeed-item mediareease"
                >
                  <div className="postfeed-contents">
                    <div className="posttopper">
                      <FontAwesomeIcon
                        icon={faGamepad}
                        className="reacticon"
                      />
                    </div>
                    <div className="postinfo">
                      <h2 className="heading-2">Игры</h2>
                      <div className="subheading">Май</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div role="listitem" className="postscollection-item mediareease">
              <Link
                to="/mediareease/games"
                className="postfeed-item-w"
              >
                <div
                  style={{
                    backgroundImage: `url("https://www.kino-teatr.ru/art/5951/85114.jpg")`,
                  }}
                  className="postfeed-item mediareease"
                >
                  <div className="postfeed-contents">
                    <div className="posttopper">
                      <FontAwesomeIcon
                        icon={faFilm}
                        className="reacticon"
                      />
                    </div>
                    <div className="postinfo">
                      <h2 className="heading-2">Фильмы</h2>
                      <div className="subheading">Апрель</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <Sidebar />
      </div >
    </Grow>
  );
}

export default Mediareease;
