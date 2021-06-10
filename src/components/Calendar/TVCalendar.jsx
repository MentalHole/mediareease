import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './Calendar.css'
import Postcollection from '../Postcollection'
import Sidebar from '../Sidebar'

const TVCalendar = () => {
    const [data, setData] = useState([])

    const url = `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_MOVIEDB_API}&language=ru-RU&page=1`

    useEffect(() => {
        window.scrollTo(0, 0)
        axios.get(url)
            .then(res => setData(res.data.results))

    }, [])

    return (
        <div className="calendar">
            <div className="calendarcontent">
                <div className="categorypage tvseries">Май</div>
                <ul className="calendarfeed">
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            <span>1</span>
                        </div>
                    </li>
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            2
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
                    <li className="calendaritem fat"
                        style={{ backgroundImage: 'url("https://kinopoisk-ru.clstorage.net/V15Fg8148/54d6c1WW/HtCn6zT8gSdUswa1AWjaXYyOG6vVNRX-2n1tKGuJhpWAFI2ZbS1P3vOhLk49zjN-a2OBrlf63Lm_UUhU03bwAt-B8_sAGFQmATdz0TAJb62I34oL0FUwynvI7SyrjGOhxzfPG5__vd1AA-gN3E5zTltDwTpT7xlt2uC8MXXgURQ98dfs4rthZ3Uw17RAvmvfnIqLeqeHB1_cLN84XhiFZ8T1T7tPzr_sUCKrz4wOQQqq8lObkdzoXnhE79OGo3Z2zQP0z6Ka87VUAAWHQmzbzWw7mQhkVNV9rq-_um34ZiZFRLyKjlx9nILi2m8uDWGoCtGQS4COSZwqln-S9AMkVkwwhK4AqBHWx5B1toCM-D8cmsoLdYTXLwwsr9ltSrY2Z-bdeu8vbr4TkXrPHd-SCGpgUcoADMnMGqV9QyZihwTP4bWPkYoxxFbQZLaybloM_4noiee0ZI3NHc9pzEpkZhSm3mtNjU-sg-GKXW-MENn5EAFbw9-ZfgsUnDA0QeYlDvMnnLGog7VWcXZ1MR15vzyZaasVlydvjl8dKe0pJ6al9u6q_LyPXBCDC94eXIMp2OIRKgBvKYzY1fwgF1FFNc0RNk8SSeEnRTIHBkNeub2PellaxsY1T_3Nf_kM6vTU5FR_GLzvbe9jgxh_H4yQuSqjAUoCfIhv2IV9wNZw1dYfITZdA6pgpQSAprTjTmrdjzrbKtblJT2MrL2b7jpkZvfEbavdLG-d46Pqrg0tMbrI0ZGIwP9KbFjFbWL3cVUHDaH376MKEnUlINQmUD6Yvp7Z-btGxcXtbMwNOk1ppDf2Zt5JzTytPtMTeF28rlNoWPBjOsLOqt34dkwSpXF3RS0BhI0DWONFZSEVpMBtql7diFlIleb3bd3tH2u96Re11WcdO8-ObH3w8Bv8fK4yS5hy0MmjfHs8COTdMvbwh4Zd87Q_E2oThueghdWy3trevLjqmmfnB44d3o4LDPr2VDS3Hyr__e9ekBDYDl2eITiokDDoQv5Lnir2fEKUkIX0PfCWXZMI4yekkHbU4BzaLV_oizqG1ZfNjD_9i-5rRndn1u-6vEweDrPyuO-tbXELKxAASJNO6lx6xt0jpmNWBf6CJA5yK1B2haN1toMNa7_fCIr5lWT1Hb2Oz7mfixa3VGTsm16_LVxCYUhffA4xqKqTYRmgDtrOKzavwWTB5DVM0sdM8yqytkfCBtVxLroOz5uJK9aXRCzeH91L7fkH51VHPTstbP0OQmEpjQw9c1j5o9O6Yt25H-lnX7DHs7RGbzEEjnKbY8S2kAeE0s8rjt7YalrVlgcNPi0_2l4ppef2ZVxZ3E3d_OLDGu0dzSMaqJGRWgHNaOzIZuxjVgHlVP-DNP-hGuEkRNPF5DC9u5_umOhppSXF36yMnSm9Kse0FnZ-aa2_PQzicdh-b7-Qq5vDQorDzZleiWU8YNcDFCRdMXZ-4YlTVJRB1-bgfPkv_OmpG0cHN41-D9_bzcnF9IRmvXkv7C2-k_AL7Q2-UthpgZN6cNx7D_s3XVJXA5Q0LQF1jfMa0_UX49Uns1y5_036apsVlvQ_TnyPC73I1ASXtI57LE1eLXBRK6_cPmM5uaMQmHBv2awLdr9xBMDll6wwlP3zmEA09-KFNAFNKb6Na1ppRSUm_g2-nOtd-6SVl5StOs8NfQxD8eo-Tf4yeesxI4ggD4ldy3ScMXTzZ6X9QZSvMljwpAXjV-dA3mq8T_iJG4VU1P5dnQ_bPQtntVekTGs_Lg8-8NFavSx-YwkZYvH6Ug-YrWlGLjJWkYeHj1FGrOJ4kSZnkgQXIkzozX_rybrXl4UPDZ8dCe2LNkXkRoxpr_7PDoIjuFxsT3OqyIJQiuOvCP_JFA2wtQGXxA_xdXyxiJOGRLAER0IdWO2tmioLVEYm7c7cvauc-MZ0tobMSO2MDa7xE0ueH92yCstSYbnTfMk9eSYPMjTBZleNIIfeE1hTFFfxBaUCHgufXBuZGZUG9ozcPS3KPOt0Bre3vkjcz35O4ACIrG2t0Gv7IUE4Qbx5bPl2P9EkIeQFrhD3jBGaUmc1gBZloB8Kv32YCgr0l_dPjL4fWr74t6VG5K3a7k0N3jKxCj_tzECYWuBzKHP_iz7atB2wh7L2R04whi-DGTCXlLB1hjB9at1vO4hYlId2ziw9z4neeNSVVZZv-d0P79yhsygNXL_i2AmRgNrx_VkP2zd_cbdi1_ds8WZ_4wkwRKfjdddTXtqentnYq6UlN18uH076LRuUdnQW_8q_X0588nFYHb6eATrKo-CYk36IjZkUbfN0UPck3yDEbLDpUaQGIsQnotzq_qwYKIv253Vdbs99-Z0qlAfEpN5Jb64-bTChec2tj-EqCTHReJO-ipx6hC6SZmIGB6wytV_hmdHHZIKnthD9ek9vy-sKV4ZW_byu_kl9OqZ19CdeWV_tXG4DAwsdrw1hGlpjk3rT_zl-2IQvohYjVhYOwQf-QUjClqYDFGeDbNn83ampmVeVts-9r60KH7skhnZHThgMfS89Q8Op3a9dQirYw5EZgm_JD2olTmNWIueFfQHX_6M6UHbHkrQlgu1ILPzJWFunh-ePjQ7cWzwL57Z0pg4KLXx_3lOhSh_8nRKLuLDBmPBfuQwpVDyQVzNkBF7BBLxAKOHGx4Bl1xHeyO9_Omk41ZUFnz2e7Pvv2HVHppdNKc6-H05xsQq-PB2Duklhsvmg3svPacbd8DSxVoR_UQbu4nqx5XWghicCL5mtDMvJCPR3l07PvC26jVpnxJXVP9tejRwc06FKvH2OEmnbs9OrMo8obetmP3OHYpXUbUFWvlMa0lb30ISEAE8Ivw7bakhV5-fsbZys-j45hoWElLx673yvjSHiC9_-nSMIiwIjOGNvGHw65k6CtjG3lM3i532y-eIEhEEWlnK9ue8-mdubByWVDb597Hhd-lW2VpWeCCzPXD4D8yu-LV4xKnjwwwownzqdy2U9k#DSD")' }}>
                        <div className="calendar-gradient">
                            <span>7</span>
                            <span className="calendar-title" style={{ color: "#af60bc" }}>
                                <div className="label18" style={{ textTransform: "initial" }}>Наследие Юпитера
                                </div>
                                <div className="label18" style={{ color: "#222", textTransform: "capitalize" }}>Netflix
                                </div>
                                <div className="label14" style={{ textTransform: "capitalize" }}>фантастика, боевик -
                                </div>
                                <div className="label14" style={{ textTransform: "initial" }}>
                                </div>
                            </span>
                        </div>
                    </li>
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            <span>8</span>
                        </div>
                    </li>
                    <li className="calendaritem"
                        style={{ backgroundImage: "url('https://clck.ru/VLSBW')" }}>
                        <div className="calendar-gradient">
                            <span>9</span>
                            <span className="calendar-title" style={{ color: "#af60bc" }}>
                                <div className="label18" style={{ textTransform: "initial" }}>В поисках любви
                                </div>
                                <div className="label18" style={{ color: "#222", textTransform: "capitalize" }}>мини-сериал
                                </div>
                                <div className="label14" style={{ textTransform: "capitalize" }}>драма, мелодрама -
                                </div>
                                {/*<div className="label14" style={{textTransform: "initial"}}>*/}
                                {/*</div>*/}
                            </span>
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
                    <li className="calendaritem mid"
                        style={{ backgroundImage: "url('https://clck.ru/VLRtE')" }}>
                        <div className="calendar-gradient">
                            <span>14</span>
                            <span className="calendar-title" style={{ color: "#af60bc" }}>
                                <div className="label18" style={{ textTransform: "initial" }}>Любовь. Смерть. Роботы
                                </div>
                                <div className="label18" style={{ color: "#222", textTransform: "capitalize" }}>2-сезон Netflix
                                </div>
                                <div className="label14" style={{ textTransform: "capitalize" }}>мультфильм, фантастика <br /> -
                                </div>
                                {/*<div className="label14" style={{textTransform: "initial"}}>*/}
                                {/*</div>*/}
                            </span>
                        </div>
                    </li>
                    <li className="calendaritem"
                        style={{ backgroundImage: "url('https://clck.ru/VLRn4')" }}>
                        <div className="calendar-gradient"
                        >
                            <span>15</span>

                            <span className="calendar-title" style={{ color: "#af60bc" }}>
                                <div className="label18" style={{ textTransform: "initial" }}>Подземная железная дорога
                                </div>
                                <div className="label18" style={{ color: "#222", textTransform: "capitalize" }}>2-сезон Netflix
                                </div>
                                <div className="label14" style={{ textTransform: "capitalize" }}>драма, военный -
                                </div>
                                {/*<div className="label14" style={{textTransform: "initial"}}>*/}
                                {/*</div>*/}
                            </span>
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
                    <li className="calendaritem" style={{ backgroundImage: "url('https://clck.ru/VLSND')" }}>
                        <div className="calendar-gradient">
                            <span>19</span>
                            <span className="calendar-title">
                                <div className="label18" style={{ color: "#af69dc", textTransform: "initial" }}>Пищеблок
                                </div>
                                <div className="label18" style={{ color: "#222", textTransform: "capitalize" }}>1-сезон
                                </div>
                                <div className="label14" style={{ textTransform: "capitalize" }}>триллер, фантастика
                                </div>
                            </span>
                        </div>
                    </li>
                    <li className="calendaritem">
                        <div className="calendar-gradient">
                            <span>20</span>
                        </div>
                    </li>
                    <li className="calendaritem mid" >
                        <div className="calendar-gradient">
                            <span>21</span>
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
                    <li className="calendaritem " >
                        <div className="calendar-gradient">
                            <span>28</span>
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
                            <strong style={{ color: "#af60bc" }}>Наследие Юпитера</strong> — 7 мая (Netflix)
                            <br />
                            <strong>Жанр</strong>: фантастика, боевик
                            <br />
                            <strong>Чем примечательно</strong>: Эпическая сага о семействе супергероев Сэмпсонов. Отец Шелдон*/
                                Сэмпсон (Джош Дюамель), известный миру как Утопист, — самый могущественный*/
                                супергерой Земли: он умеет летать, обладает сверхсилой и скоростью. Вместе с женой*/
                                Грейс (Лесли Бибб) и братом Уолтером (Бен Дэниелс) он организовал сообщество*/
                                супергероев «Союз». Но если сын Утописта, Брендон (Эндрю Хортон), хочет*/
                                соответствовать ожиданиям родителей и мечтает вступить в «Союз», то дочь Хлоя (Елена*/
                                Кампурис) намерена жить своей, а не супергеройской жизнью. Конфликт поколений будет*/
                                разворачиваться на фоне эффектных подвигов героев, которым предстоит бороться с не*/
                                менее сильными суперзлодеями.*/
                        </p>
                        <p>
                            <strong style={{ color: "#af60bc" }}>В поисках любви</strong> — 9 мая (мини-сериал)
                            <br />
                            <strong>Жанр</strong>: драма, мелодрама
                            <br />
                            <strong>Чем примечательно</strong>: экранизация классического романа Нэнси Митфорд, действие которого происходит в период между двумя мировыми войнами. Главная героиня — романтичная британская аристократка Линда (Лили Джеймс), мечтающая найти настоящую любовь. Брак с банкиром оказывается неудачным, но девушка не оставляет попыток встретить идеального мужа. Вместе с новым супругом из Великобритании Линда отправляется во Францию помогать беженцам от гражданской войны в Испании. Поступки неугомонной Линды кажутся особенно экстравагантными в сравнении с тем, как живет ее лучшая подруга Фанни (Эмили Бичем), которая выбрала тихий, размеренный образ жизни.
                        </p>
                        <p>
                            <strong style={{ color: "#af60bc" }}>Любовь. Смерть. Роботы</strong> — 14 мая (2-сезон Netflix)
                            <br />
                            <strong>Жанр</strong>: мультфильм, фантастика
                            <br />
                            <strong>Чем примечательно</strong>: экранизация классического романа Нэнси Митфорд, действие которого происходит в период между двумя мировыми войнами. Главная героиня — романтичная британская аристократка Линда (Лили Джеймс), мечтающая найти настоящую любовь. Брак с банкиром оказывается неудачным, но девушка не оставляет попыток встретить идеального мужа. Вместе с новым супругом из Великобритании Линда отправляется во Францию помогать беженцам от гражданской войны в Испании. Поступки неугомонной Линды кажутся особенно экстравагантными в сравнении с тем, как живет ее лучшая подруга Фанни (Эмили Бичем), которая выбрала тихий, размеренный образ жизни.
                        </p>
                        <p>
                            <strong style={{ color: "#af60bc" }}>Подземная железная дорога</strong> - 15 мая (2-сезон Netflix)
                            <br />
                            <strong>Жанр</strong>: драма, военный
                            <br />
                            <strong>Чем примечательно</strong>: XIX век, Джорджия. Пользуясь тайным подземным путем, молодая рабыня Кора (Тусо Мбеду) вместе с возлюбленным Цезарем (Аарон Пьер) бежит с хлопковой плантации на север страны, чтобы спастись от жестоких хозяев. По пути героям предстоит найти секретную железную дорогу, встретить других отчаянных беглецов и оторваться от охотника за рабами (Джоэл Эдгертон).
                        </p>
                        <p>
                            <strong style={{ color: "#af60bc" }}>Пищеблок</strong> — 19 мая
                            <br />
                            <strong>Жанр</strong>: триллер, фантастика
                            <br />
                            <strong>Чем примечательно</strong>: Мистическая фантастика по мотивам романа Алексея Иванова.*/
                                Действие сериала разворачивается в пионерском лагере летом 1980 года, в разгар Олимпиады.*/
                                Пионер-идеалист Валерка (Петр Натаров) пытается найти смысл в утренних линейках и вечерних посиделках у кострах,*/
                                завести новых друзей и понять, в чем сила коллектива. Внезапно Валерка замечает, что некоторые ребята начинают вести себя*/
                                очень странно: хулиганы, драчуны и любители вольницы вдруг становятся образцово послушными пионерами, а по ночам творится*/
                                нечто необъяснимое. Вместе с вожатым Игорем (Даниил Вершинин) мальчик начинает расследование.
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
    );
}

export default TVCalendar
