import React from "react";
import Header from "../../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import Postcollection from "../../components/Postcollection";
import Sidebar from "../../components/Sidebar";

function Minari() {

  const bgImageGunda =
    "https://uploads-ssl.webflow.com/5fec690c2d254248671fe526/6077fc5b0301ea0ceb0440e8_cover_card.jpg";
  const bgImageMinari =
    "https://uploads-ssl.webflow.com/5fec690c2d254248671fe526/606fe939aab36448aeacd1ed_cover_card.jpg";

  return (
    <div className="article">
      <div
        className="articlecover"
        style={{
          backgroundImage: `url("https://occ-0-1068-1723.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTox5AsZXZkW_YdLkDgP3sdX7VIP4LKkd2Nw_OU9qLsbfs5PwfjFqIY8_eSc_YsesY5CPFFOPCQSAvnShvceRMZiBjOV.jpg?r=bee")`,
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
                  <div>13.4.2020</div>
                  <FontAwesomeIcon
                    icon={faDotCircle}
                    className="dotseparator"
                  />
                  <div>триллер</div>
                </div>
              </div>
              <div
                className="category article-categories"
                style={{ backgroundColor: "#dc6175" }}
              >
                кино
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
            <Postcollection
              type="кино"
              title="Гунда"
              text="Безмолвное рабство"
              date="16.4.2021"
              genre="комедия, триллер"
              poster={bgImageGunda}
            />
            <Postcollection
              type="кино"
              title="Минари"
              text="Еда для бедных и богачей"
              date="9.4.2021"
              genre="хоррор"
              poster={bgImageMinari}
            />
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Minari;
