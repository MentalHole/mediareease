import React from "react";
import Sidebar from "../components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faFilm,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";

function Mediareease() {
  return (
    <div className="mediareease">
      <div className="maincontent">
        <div className="posts">
          <div className="categorypage mediareease">Релизы</div>
          <div role="list" className="postfeed">
            <div role="listitem" className="postscollection-item">
              <div
                style={{
                  backgroundImage: `url("https://uploads-ssl.webflow.com/5fec690c2d254248671fe526/6077fc5b0301ea0ceb0440e8_cover_card.jpg")`,
                }}
                href="/articles/gunda"
                className="postfeed-item mediareease  "
              >
                <div className="postfeed-contents">
                  <div className="posttopper">
                    <FontAwesomeIcon
                      icon={faFilm}
                      className="reacticon"
                    />
                  </div>
                  <div className="postinfo">
                    <h2 className="heading-2">Май</h2>
                    <div className="subheading">Фильмы в цифре</div>
                  </div>
                </div>
              </div>
            </div>
            <div role="listitem" className="postscollection-item">
              <div
                style={{
                  backgroundImage: `url("https://uploads-ssl.webflow.com/5fec690c2d254248671fe526/606fe939aab36448aeacd1ed_cover_card.jpg")`,
                }}
                href="/articles/minari"
                className="postfeed-item mediareease  "
              >
                <div className="postfeed-contents">
                  <div className="posttopper">
                    <FontAwesomeIcon
                      icon={faDesktop}
                      className="reacticon"
                    />
                  </div>
                  <div className="postinfo">
                    <h2 className="heading-2">Май</h2>
                    <div className="subheading">Сериалы</div>
                  </div>
                </div>
              </div>
            </div>
            <div role="listitem" className="postscollection-item">
              <div
                style={{
                  backgroundImage: `url("https://uploads-ssl.webflow.com/5fec690c2d254248671fe526/6066abaeb2b578e8d256ab13_card_cover.jpg")`,
                }}
                href="/articles/the-father"
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
                    <h2 className="heading-2">Май</h2>
                    <div className="subheading">Игры</div>
                  </div>
                </div>
              </div>
            </div>
            <div role="listitem" className="postscollection-item">
              <div
                style={{
                  backgroundImage: `url("https://uploads-ssl.webflow.com/5fec690c2d254248671fe526/60533bc37f6881c73b6d849b_cover_card.jpg")`,
                }}
                href="/articles/ma-raineys-black-bottom"
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
                    <h2 className="heading-2">Апрель</h2>
                    <div className="subheading">Фильмы</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Sidebar />
    </div >
  );
}

export default Mediareease;
