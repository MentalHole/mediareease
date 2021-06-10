import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './Calendar.css'
import Postcollection from '../Postcollection'
import Sidebar from '../Sidebar'

const MovieCalendar = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_MOVIEDB_API}&language=ru-RU&page=1`)
            .then(res => setData(res.data.results))
    }, [])

    return (
        <div className="calendar">
            <div className="calendarcontent">
                <div className="categorypage movie">Май</div>
                <ul className="calendarfeed">
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            <span>1</span>
                        </div>
                    </li>
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            <span>2</span>
                        </div>
                    </li>
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            <span>3</span>
                        </div>
                    </li>
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            <span>4</span>
                        </div>
                    </li>
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            <span>5</span>
                        </div>
                    </li>
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            <span>6</span>
                        </div>
                    </li>
                    <li className="calendaritem "
                        style={{ backgroundImage: 'url("https://avatars.mds.yandex.net/get-ott/374297/2a0000017924707a8aa4438bf11be7e63b3b/678x380")' }}>
                        <div className="calendar-gradient">
                            <span>7</span>
                            <strong className="calendar-title" style={{ color: "#dc6175" }}>
                                <div className="label18" style={{ textTransform: "initial" }}>Райя и последний дракон
                                </div>
                                <div className="label18" style={{ color: "#222", textTransform: "capitalize" }}>Disney
                                </div>
                                <div className="label14" style={{ textTransform: "capitalize" }}>мультфильм, фэнтези, боевик, комедия
                                </div>
                            </strong>
                        </div>
                    </li>
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            <span>8</span>
                        </div>
                    </li>
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            <span>9</span>
                        </div>
                    </li>
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            <span>10</span>
                        </div>
                    </li>
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            <span>11</span>
                        </div>
                    </li>
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            <span>12</span>
                        </div>
                    </li>
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            <span>13</span>
                        </div>
                    </li>
                    <li className="calendaritem "
                        style={{ backgroundImage: 'url("https://static.kinoafisha.info/k/news/1200/upload/news/295803915800.jpg")' }}>
                        <div className="calendar-gradient">
                            <span>14</span>
                            <strong className="calendar-title" style={{ color: "#dc6175" }}>
                                <div className="label18" style={{ textTransform: "initial" }}>Женщина в окне</div>
                                <div className="label18" style={{ color: "#222", textTransform: "initial" }}>Netflix</div>
                                <div className="label14" style={{ textTransform: "capitalize" }}>триллер, криминал, детектив
                                </div>
                            </strong>
                        </div>
                    </li>
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            <span>15</span>
                        </div>
                    </li>
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            <span>16</span>
                        </div>
                    </li>
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            <span>17</span>
                        </div>
                    </li>
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            <span>18</span>
                        </div>
                    </li>
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            <span>19</span>
                        </div>
                    </li>
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            <span>20</span>
                        </div>
                    </li>
                    <li className="calendaritem mid"
                        style={{ backgroundImage: 'url("https://ixbt.online/live/topics/preview/00/02/11/16/b1121efe65.jpg")' }}>
                        <div className="calendar-gradient">
                            <span>21</span>

                            <strong className="calendar-title" style={{ color: "#dc6175" }}>
                                <div className="label18" style={{ textTransform: "initial" }}>Армия мертвецов</div>
                                <div className="label18" style={{ color: "#222", textTransform: "capitalize" }}>Netflix
                                </div>
                                <div className="label14" style={{ textTransform: "capitalize" }}>ужасы, драма, боевик
                                </div>
                            </strong>
                        </div>
                    </li>
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            <span>22</span>
                        </div>
                    </li>
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            <span>23</span>
                        </div>
                    </li>
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            <span>24</span>
                        </div>
                    </li>
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            <span>25</span>
                        </div>
                    </li>
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            <span>26</span>
                        </div>
                    </li>
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            <span>27</span>
                        </div>
                    </li>
                    <li className="calendaritem fat"
                        style={{ backgroundImage: 'url("https://cdn21.img.ria.ru/images/155788/47/1557884744_0:0:1200:675_1920x0_80_0_0_2db875a81c0e0c6d284f1dc27a6bdead.jpg")' }}>
                        <div className="calendar-gradient">
                            <span>28</span>
                            <strong className="calendar-title" style={{ color: "#dc6175" }}>
                                <div className="label18" style={{ textTransform: "initial" }}>Круэлла</div>
                                <div className="label18" style={{ color: "#222", textTransform: "capitalize" }}>Disney+
                                </div>
                                <div className="label14" style={{ textTransform: "capitalize" }}>комедия, криминал, драма
                                </div>
                            </strong>
                        </div>
                    </li>
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            <span>29</span>
                        </div>
                    </li>
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            <span>30</span>
                        </div>
                    </li>
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            <span>31</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="articlecontent-wrapper">
                <div className="articlecontent">
                    <div className="articlecontent-meat">
                        <p>
                            <strong style={{ color: "#dc6175" }}>Райя и последний дракон</strong> — 7 мая (Disney)
                            <br />
                            <strong>Жанр</strong>: мультфильм, фэнтези, боевик, комедия
                            <br />
                            <strong>Чем примечательно</strong>: красочные поиски последнего живого дракона отважной воительницей Райей.
                        </p>
                        <p>
                            <strong style={{ color: "#dc6175" }}>Женщина в окне</strong> — 14 мая (Netflix)
                            <br />
                            <strong>Жанр</strong>: триллер, криминал, детектив
                            <br />
                            <strong>Чем примечательно</strong>: мир становится угрозой для страдающей от агорафобии женщины, чьи соседи оказываются не теми, за кого себя выдавали. В главной роли Эми Адамс и Гари Олдман.
                        </p>
                        <p>
                            <strong style={{ color: "#dc6175" }}>Армия мертвецов</strong> - 21 мая (Netflix)
                            <br />
                            <strong>Жанр</strong>: ужасы, драма, боевик
                            <br />
                            <strong>Чем примечательно</strong>: фильм-ограбление и зомби-слэшер в одном лице. По заверениям Зака Снайдера, на этот раз ждать режиссерской версии не придется.
                        </p>
                        <p>
                            <strong style={{ color: "#dc6175" }}>Круэлла</strong> — 28 мая (Disney+)
                            <br />
                            <strong>Жанр</strong>: комедия, криминал, драма
                            <br />
                            <strong>Чем примечательно</strong>: предыстория самой жестокой диснеевской злодейки, вероятно, вдохновленная недавним «Джокером». Эмма Стоун в главной роли.
                        </p>
                    </div>
                </div>
                <div className="other-content">
                    {data
                        .map((post) => {
                            return <div key={post.id} className="postscollection-item"><Postcollection post={post} />
                            </div>
                        })
                        .slice(0, 2)}
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}

export default MovieCalendar
