import React from "react";
import Pagination from "../components/Pag";
import Sidebar from "../components/Sidebar";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDotCircle} from '@fortawesome/free-solid-svg-icons'

function Movies() {
  return (
    <div className="maincontent">
      <div className="posts">
        <div>
          <div role="list">
            <div role="listitem">
              <div className="categorypage">Фильмы</div>
              <div>
                <div role="list" className="postfeed">
                  <div role="listitem" className="postscollection-item">
                    <div
                      style={{
                        backgroundImage: `url("https://uploads-ssl.webflow.com/5fec690c2d254248671fe526/6077fc5b0301ea0ceb0440e8_cover_card.jpg")`,
                      }}
                      href="/articles/gunda"
                      className="postfeed-item  "
                    >
                      <div className="postfeed-contents">
                        <div className="posttopper">
                          <div
                            style={{ backgroundColor: `#dc6175` }}
                            className="category"
                          >
                            <div className="label14">Кино</div>
                          </div>
                        </div>
                        <div className="postinfo">
                          <h2 className="heading-2">Гунда</h2>
                          <div className="subheading">Безмолвное рабство</div>
                          <div className="postmeta">
                            <div>16.4.2021</div>
                            <FontAwesomeIcon icon={faDotCircle} className="dotseparator" />
                            <div className="genres">комедия</div>
                          </div>
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
                      className="postfeed-item  "
                    >
                      <div className="postfeed-contents">
                        <div className="posttopper">
                          <div
                            style={{ backgroundColor: `#dc6175` }}
                            className="category"
                          >
                            <div className="label14">Кино</div>
                          </div>
                        </div>
                        <div className="postinfo">
                          <h2 className="heading-2">Минари</h2>
                          <div className="subheading">
                            Еда для бедных и богачей
                            </div>
                          <div className="postmeta">
                            <div>9.4.2021</div>
                            <FontAwesomeIcon icon={faDotCircle} className="dotseparator" />
                            <div className="genres">хоррор</div>
                          </div>
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
                      className="postfeed-item"
                    >
                      <div className="postfeed-contents">
                        <div className="posttopper">
                          <div
                            style={{ backgroundColor: `#dc6175` }}
                            className="category"
                          >
                            <div className="label14">Кино</div>
                          </div>
                        </div>
                        <div className="postinfo">
                          <h2 className="heading-2">Отец</h2>
                          <div className="subheading">Простите, что дышу</div>
                          <div className="postmeta">
                            <div>2.4.2021</div>
                            <FontAwesomeIcon icon={faDotCircle} className="dotseparator" />
                            <div className="genres">постаппокалипсис</div>
                          </div>
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
                      className="postfeed-item"
                    >
                      <div className="postfeed-contents">
                        <div className="posttopper">
                          <div
                            style={{ backgroundColor: `#dc6175` }}
                            className="category"
                          >
                            <div className="label14">Кино</div>
                          </div>
                        </div>
                        <div className="postinfo">
                          <h2 className="heading-2">Ма Рейни: Мать блюза</h2>
                          <div className="subheading">
                            Музыка шумных оркестров
                            </div>
                          <div className="postmeta">
                            <div>19.3.2021</div>
                            <FontAwesomeIcon icon={faDotCircle} className="dotseparator" />
                            <div className="genres">фантастика</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="postscollection-item">
                    <div
                      style={{
                        backgroundImage: `url("https://media.film.ru/sites/default/files/styles/thumb_1024x450/public/49648168-1408003.jpg")`,
                      }}
                      href="/articles/gunda"
                      className="postfeed-item  "
                    >
                      <div className="postfeed-contents">
                        <div className="posttopper">
                          <div
                            style={{ backgroundColor: `#dc6175` }}
                            className="category"
                          >
                            <div className="label14">Кино</div>
                          </div>
                        </div>
                        <div className="postinfo">
                          <h2 className="heading-2">Новости со всех концов света</h2>
                          <div className="subheading">Одиссея капитана Кидда</div>
                          <div className="postmeta">
                            <div>16.4.2021</div>
                            <FontAwesomeIcon icon={faDotCircle} className="dotseparator" />
                            <div className="genres">комедия</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="postscollection-item">
                    <div
                      style={{
                        backgroundImage: `url("https://russorosso.ru/wp-content/uploads/2021/02/4.jpg")`,
                      }}
                      href="/articles/minari"
                      className="postfeed-item  "
                    >
                      <div className="postfeed-contents">
                        <div className="posttopper">
                          <div
                            style={{ backgroundColor: `#dc6175` }}
                            className="category"
                          >
                            <div className="label14">Кино</div>
                          </div>
                        </div>
                        <div className="postinfo">
                          <h2 className="heading-2">Святая мод</h2>
                          <div className="subheading">
                            Сокральная одержимость
                            </div>
                          <div className="postmeta">
                            <div>9.4.2021</div>
                            <FontAwesomeIcon icon={faDotCircle} className="dotseparator" />
                            <div className="genres">хоррор</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="postscollection-item">
                    <div
                      style={{
                        backgroundImage: `url("https://img.gazeta.ru/files3/138/13508138/upload-cin01-pic4_zoom-1500x1500-55943.jpg")`,
                      }}
                      href="/articles/the-father"
                      className="postfeed-item"
                    >
                      <div className="postfeed-contents">
                        <div className="posttopper">
                          <div
                            style={{ backgroundColor: `#dc6175` }}
                            className="category"
                          >
                            <div className="label14">Кино</div>
                          </div>
                        </div>
                        <div className="postinfo">
                          <h2 className="heading-2">Земля кочевников</h2>
                          <div className="subheading">Гроздья (не)свободы</div>
                          <div className="postmeta">
                            <div>2.4.2021</div>
                            <FontAwesomeIcon icon={faDotCircle} className="dotseparator" />
                            <div className="genres">постаппокалипсис</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="postscollection-item">
                    <div
                      style={{
                        backgroundImage: `url("https://thumbs.dfs.ivi.ru/storage15/contents/d/f/f16ac198c146983d410f60807aad05.jpg")`,
                      }}
                      href="/articles/ma-raineys-black-bottom"
                      className="postfeed-item"
                    >
                      <div className="postfeed-contents">
                        <div className="posttopper">
                          <div
                            style={{ backgroundColor: `#dc6175` }}
                            className="category"
                          >
                            <div className="label14">Кино</div>
                          </div>
                          <div className="category hannel">
                            <div className="label14 channel">Disney+</div>
                          </div>
                        </div>
                        <div className="postinfo">
                          <h2 className="heading-2">Душа</h2>
                          <div className="subheading">
                            О жизни и смерти
                            </div>
                          <div className="postmeta">
                            <div>19.3.2021</div>
                            <FontAwesomeIcon icon={faDotCircle} className="dotseparator" />
                            <div className="genres">фантастика</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Pagination />
      </div>
      <Sidebar />
    </div>
  );
}

export default Movies;
