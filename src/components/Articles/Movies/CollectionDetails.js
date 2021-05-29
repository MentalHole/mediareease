import React from "react";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "../../Header";
import Sidebar from "../../Sidebar";
import data from "../../../data/all.json"

function CollectionDetails() {

  return (
    <div className="article">
      <div
        className="articlecover"
        style={{
          backgroundImage: `url("https://www.cineuropa.org/Files/2020/02/25/1582641367601.jpg?1582641371660")`,
        }}
      >
        <div className="articlecover-gradient">
          <Header />
          <div className="article-wrapper">
            <div className="articleinfo">
              <div className="articleinfo-titles">
                <div className="articleinfo-title"></div>
                <div className="articleinfo-subtitle">{post.title}</div>
                <div className="postmeta articleinfo-meta">
                  <div>13.4.2020</div>
                  <FontAwesomeIcon
                    icon={faDotCircle}
                    className="dotseparator"
                  />
                  <div>триллер</div>
                </div>
              </div>
              <div
                className="category movie"
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
            <div className="articlecontent-meat w-richtext">
              <p>
                В ближайшем будущем им предстоит сдать экзамены «гаокао»,
                результаты которых определят судьбы этих маленьких, но уже таких
                ответственных людей. Низкие баллы сулят возвращение в выпускной
                класс, а для выходцев из бедных семей дополнительный год
                обучения может оказаться непосильным испытанием.
              </p>
              <p>
                Потому все ученики, от двоечников до отличников, живут под
                тяжелым давлением. Прежде всего от собственных ожиданий, ведь
                перспектива подвести семью и учителей кажется им смертным
                приговором. Так что они на недели зарываются в учебники, держа в
                голове лишь надежду на светлое будущее.
              </p>
            </div>
          </div>
          <div className="other-content">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionDetails;
