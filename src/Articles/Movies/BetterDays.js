import React from "react"
import { faDotCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import YouTube from "react-youtube"

import Header from "../../components/Header"
import movies from "../../data/movies.json"
import Sidebar from "../../components/Sidebar"
import Postcollection from "../../components/postcollection/Postcollection"

function BetterDays() {
  const opts = {
    width: '100%',
    height: '540',
    playerVars: {
      autoplay: 0,
      showinfo: 0
    },
  }


  return (
    <div className="article">
      <div
        className="articlecover"
        style={{
          backgroundImage: `url("https://uploads-ssl.webflow.com/5fec690c2d254248671fe526/60825a7af8c9397203bfe830_cover_page.jpg")`,
        }}
      >
        <div className="articlecover-gradient">
          <Header />
          <div className="article-wrapper">
            <div className="articleinfo">
              <div className="articleinfo-titles">
                <div className="articleinfo-title">Лучшие дни</div>
                <div className="articleinfo-subtitle">Дество с синяками</div>
                <div className="postmeta articleinfo-meta">
                  <div>13.4.2021</div>
                  <FontAwesomeIcon
                    icon={faDotCircle}
                    className="dotseparator"
                  />
                  <div>триллер</div>
                </div>
              </div>
              <div
                className="category movie"
                style={{ backgroundColor: "#dc6175" }}
              >
                <div className="label14">кино</div>
              </div>
            </div>
          </div>
        </div>
        <div className="articlecontent-wrapper">
          <div className="articlecontent">
            <p className="articlecontent-intro" style={{ color: "#dc6175" }}>
              Юность, едва ли не самая романтичная пора, для школьников обычного
              китайского городка напоминает выживание в концлагере. Ученики
              маршируют на занятия и выкрикивают патриотические лозунги, а
              устрашающее здание с высокими стенами походит на тюрьму. Те самые
              «Лучшие дни», вынесенные в заглавие фильма Дерека Цана, подростки
              проводят под бесчеловечным давлением учителей и родителей.
            </p>
            <div className="articlecontent-meat">
              <p>
                В ближайшем будущем им предстоит сдать экзамены «гаокао»,
                результаты которых определят судьбы этих маленьких, но уже таких
                ответственных людей. Низкие баллы сулят возвращение в выпускной
                класс, а для выходцев из бедных семей дополнительный год
                обучения может оказаться непосильным испытанием.
              </p>
              <figure >
                <img src="https://uploads-ssl.webflow.com/5fec690c2d254248671fe526/60825ab5a8f987049dba339e_1.jpg" loading="lazy"
                  alt="Better Days" style={{borderRadius: 12, width: "100%", height: 540}}/>
              </figure>
              <p>
                Потому все ученики, от двоечников до отличников, живут под
                тяжелым давлением. Прежде всего от собственных ожиданий, ведь
                перспектива подвести семью и учителей кажется им смертным
                приговором. Так что они на недели зарываются в учебники, держа в
                голове лишь надежду на светлое будущее.
              </p>
              {/* <iframe id="ytplayer" src="https://www.youtube.com/watch?v=1CbHwPfW4PQ" frameborder="0"></iframe> */}
              <YouTube opts={opts} videoId='1CbHwPfW4PQ'/>
            </div>
          </div>
          <div className="other-content">
            {movies.map((post) => {
              return <Postcollection post={post} />
            }).slice(0, 2)}
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BetterDays
