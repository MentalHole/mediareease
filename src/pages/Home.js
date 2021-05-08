import React from "react";
import Sidebar from "../components/Sidebar";
import Pag from "../components/Pag";
import Postcollection from "../components/Postcollection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Home(props) {

  const bgImageGunda = "https://uploads-ssl.webflow.com/5fec690c2d254248671fe526/6077fc5b0301ea0ceb0440e8_cover_card.jpg"
  const bgImageMinari = "https://uploads-ssl.webflow.com/5fec690c2d254248671fe526/606fe939aab36448aeacd1ed_cover_card.jpg"
  const bgImageFather = "https://uploads-ssl.webflow.com/5fec690c2d254248671fe526/6066abaeb2b578e8d256ab13_card_cover.jpg"
  const bgImageMaReiny = "https://uploads-ssl.webflow.com/5fec690c2d254248671fe526/60533bc37f6881c73b6d849b_cover_card.jpg"
  console.log(props.location);
  console.log(props.match);
  console.log(props.history);
  return (
    <div className="maincontent">
      <div className="posts">
        <div>
          <div role="list">
            <div role="listitem">
              <Link className="main-post" to="/mediareease/articles/better-days">
                <div className="posttopper toppost">
                  <div className="category movie" style={{ backgroundColor: `#222` }}>
                    <div className="label14">кино</div>
                  </div>
                </div>
                <div className="mainpost-preview">
                  <div className="postinfo">
                    <h2 className="heading-2 toppost">Лучшие дни</h2>
                    <div className="subheading toppost">
                      Детсво с синяками
                      </div>
                    <div className="postmeta">
                      <div>23.04.2021</div>
                      <FontAwesomeIcon icon={faDotCircle} className="dotseparator"/>
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
              <div>
                <div role="list" className="postfeed">

                  <Postcollection category="movie" type="кино" title="Гунда" text="Безмолвное рабство" date="16.4.2021" genre="комедия, триллер" poster={bgImageGunda} article="gunda"/>
                  <Postcollection category="movie" type="кино" title="Минари" text="Еда для бедных и богачей" date="9.4.2021" genre="хоррор" poster={bgImageMinari} article="minari"/>
                  <Postcollection category="movie" type="кино" title="Отец" text="Простите, что дышу" date="9.4.2021" genre="драма" poster={bgImageFather} />
                  <Postcollection category="movie" type="кино" title="Ма Рейни: Мать блюза" text="Музыка шумных оркестров" date="9.4.2021" genre="мюзикл" poster={bgImageMaReiny} />

                </div>
              </div>
            </div>
          </div>
        </div>
        <Pag />
      </div>

      <Sidebar />

    </div>


  );
}

export default Home;
