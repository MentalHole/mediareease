import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePagination from "../hooks/usePagination";

const Pag = ({ data, itemsPerPage, startFrom }) => {
  const { pagination, prevPage, nextPage, changePage } = usePagination({ itemsPerPage, data, startFrom });
  return (<div className="pagination">
    <div className="pagintaionbtn">
      <a onClick={prevPage} href="/#" className="paginationbtn left" id="pagLeft">
        <FontAwesomeIcon icon={faArrowLeft} className="pagination-arrow" />
        <span>в будущее</span>
      </a>

    </div>

    <div className="pagination-counter">
      <div className="pag-item">
        {pagination.map(page => {
          if (!page.ellipsis) {
            return (
              <li key={page.id}>
                <a
                  href="/#"
                  className={page.current ? "pag-link current" : "pag-link"}
                  onClick={(e) => changePage(page.id, e)}
                >
                  {page.id}
                </a>
              </li>
            )
          } else {
            return <li key={page.id}><span className="pagination-ellipsis">&hellip;</span></li>
          }
        })}
      </div>
    </div>

    <div className="paginationbtn">
      <a onClick={nextPage} href="/#" className="paginationbtn right">
        <span>в прошлое</span>
        <FontAwesomeIcon icon={faArrowRight} className="pagination-arrow" />
      </a>
    </div>
  </div>
  )
}

export default Pag