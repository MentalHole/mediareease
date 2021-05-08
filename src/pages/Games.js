import React from "react";
import Pagination from "../components/Pag";
import Postcollection from "../components/Postcollection";
import Sidebar from "../components/Sidebar";

function Games() {
  const bgImagePersona = "https://bleedingcool.com/wp-content/uploads/2020/12/Persona-5-AFK-Arena-900x900.jpg"
  return (
    <div className="maincontent">
      <div className="posts">
        <div className="categorypage games">Сериалы</div>
        <div>
          <div role="list" className="postfeed">

            <Postcollection category="games" type="игры" title="Лучшие игры марта 2021" text="По версии Metacritic" date="16.4.2021" genre="экшен" poster={bgImagePersona} />
            <Postcollection category="games" type="игры" title="Лучшие игры марта 2021" text="По версии Metacritic" date="17.7.2020" genre="адвенчура" poster={bgImagePersona} />
            <Postcollection category="games" type="игры" title="Лучшие игры марта 2021" text="По версии Metacritic" date="17.7.2020" genre="рпг" poster={bgImagePersona} />
            <Postcollection category="games" type="игры" title="Лучшие игры марта 2021" text="По версии Metacritic" date="17.7.2020" genre="souls-like" poster={bgImagePersona} />

            <Postcollection category="games" type="игры" title="Лучшие игры марта 2021" text="По версии Metacritic" date="16.4.2021" genre="экшен" poster={bgImagePersona} />
            <Postcollection category="games" type="игры" title="Лучшие игры марта 2021" text="По версии Metacritic" date="17.7.2020" genre="адвенчура" poster={bgImagePersona} />
            <Postcollection category="games" type="игры" title="Лучшие игры марта 2021" text="По версии Metacritic" date="17.7.2020" genre="рпг" poster={bgImagePersona} />
            <Postcollection category="games" type="игры" title="Лучшие игры марта 2021" text="По версии Metacritic" date="17.7.2020" genre="souls-like" poster={bgImagePersona} />

          </div>
        </div>
        <Pagination />
      </div>
      <Sidebar />
    </div>
  );
}

export default Games;
