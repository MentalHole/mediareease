import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faDesktop, faFilm, faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faTelegramPlane, faTwitter, faVk } from "@fortawesome/free-brands-svg-icons";

function Sidebar() {
  return (
    <div className="homecontent-sidebar">
      <div role="list" className="mediareease-block">
        <div className="mediareease-block-label">
          <div className="category mediareease">
            <div className="label14">релизы</div>
          </div>
        </div>
        <div className="mediareease-month">Апрель</div>
        <div role="listitem">
          <Link
            to="/movies"
            className="mediareease-platformgroup"
          >
            <FontAwesomeIcon icon={faFilm} className="reacticon bar" />
            <div className="platformgroup-textbox">
              <div className="label18">Фильмы</div>
              <div className="label12">9 релизов</div>
            </div>
          </Link>
        </div>
        <div role="listitem">
          <Link
            to="/tvseries"
            className="mediareease-platformgroup"
          >
            <FontAwesomeIcon icon={faDesktop} className="reacticon bar" />
            <div className="platformgroup-textbox">
              <div className="label18">Сериалы</div>
              <div className="label12">15 релизов</div>
            </div>
          </Link>
        </div>
        <div role="listitem">
          <Link
            to="/games"
            className="mediareease-platformgroup"
          >
            <FontAwesomeIcon icon={faGamepad} className="reacticon bar" />
            <div className="platformgroup-textbox">
              <div className="label18">Игры</div>
              <div className="label12">13 релизов</div>
            </div>
          </Link>
        </div>
        <div role="listitem">
          <Link
            to="/mediareeases"
            className="mediareease-platformgroup"
          >
            <FontAwesomeIcon icon={faCalendarAlt} className="reacticon bar" />
            <div className="label18">Календарь</div>
          </Link>
        </div>
      </div>

      <div role="list" className="mediareease-block">
        <div role="listitem">
          <Link
            to="/"
            className="mediareease-platformgroup"
          >
            <FontAwesomeIcon icon={faVk} className="reacticon bar vk" />
            <div className="label18">Группа VK</div>
          </Link>
        </div>
        <div role="listitem">
          <Link
            to="/"
            className="mediareease-platformgroup"
          >
            <FontAwesomeIcon icon={faTwitter} className="reacticon bar twitter" />
            <div className="label18">Twitter</div>
          </Link>
        </div>
        <div role="listitem">
          <Link
            to="/"
            className="mediareease-platformgroup"
          >
            <FontAwesomeIcon icon={faTelegramPlane} className="reacticon bar telegram" />
            <div className="label18">Telegram</div>
          </Link>
        </div>
      </div>

    </div>
  );
}

export default Sidebar;
