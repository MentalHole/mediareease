import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

class Pag extends Component {
    render() {
        return (
            <div>
                <div className="pagination">
                    <div className="pagintaionbtn">
                        <Link to="/past" className="paginationbtn left">
                            <FontAwesomeIcon icon={faArrowLeft} className="pagination-arrow" />
                            <span>в будущее</span>
                        </Link>
                    </div>
                    
                    <div className="pagination-counter">1 / 4</div>
                    
                    <div className="paginationbtn">
                        <Link to="/past" className="paginationbtn right">
                            <span>в прошлое</span>
                            <FontAwesomeIcon icon={faArrowRight} className="pagination-arrow" />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pag;