import React from "react";
import Pagination from "../components/Pag";
import Postcollection from "../components/Postcollection";
import Sidebar from "../components/Sidebar";

export default function TVSeries(props) {
  const bgImageQueensGambit = "https://img.gazeta.ru/files3/593/13331593/upload-MV5BZDhjZDNlODctM2E1OC00ZTE5LTk3YjMtNGU0ODJiOWVlNTYyXkEyXkFqcGdeQXVyMTAyNDI5NzA4-pic4_zoom-1500x1500-19044.jpg"
  const bgImageSins = "https://s4.afisha.ru/mediastorage/9b/2a/593893cd6da2412b9605e16c2a9b.jpg"
  return (
    <div className="maincontent">
      <div className="posts">
        <div className="categorypage tvseries">Сериалы</div>
        <div>
          <div role="list" className="postfeed">

            <Postcollection category="tvseries" type="сериалы" title="Ход королевы" text="До последней пешки" date="16.4.2021" genre="комедия" poster={bgImageQueensGambit} />
            <Postcollection category="tvseries" type="сериалы" title="Чужие грехи" text="Под гнетом добродетели" date="17.7.2020" genre="мюзикл" poster={bgImageSins} />
            <Postcollection category="tvseries" type="сериалы" title="Чужие грехи" text="Под гнетом добродетели" date="17.7.2020" genre="мюзикл" poster={bgImageSins} />
            <Postcollection category="tvseries" type="сериалы" title="Чужие грехи" text="Под гнетом добродетели" date="17.7.2020" genre="мюзикл" poster={bgImageSins} />

          </div>
        </div>
        <Pagination />
      </div>
      <Sidebar />
    </div>
  );
}
