import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios'
import { Container } from '@material-ui/core';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Postcollection from './postcollection/Postcollection';

const Pag = (props) => {
    const [offset, setOffset] = useState(0)
    const [data, setData] = useState([])
    const [perPage] = useState(8)
    const [pageCount, setPageCount] = useState(0)


    const getData = async() => {
        const data = props.data
        const slice = data.slice(offset, offset + perPage)
        setData(slice)
        setPageCount(Math.ceil(data.length / perPage))
    }

    const handlePageClick = (e) => {
        const selectedPage = e.selected
        setOffset(selectedPage + 4)
    }

    useEffect(() => {getData()})
    return (
        <div className="postfeed">
            {data.map(post => {
              return <div key={post.id} className="postscollection-item">
                <Postcollection post={post} category={props.category} poster={props.poster}/>
              </div>
            })}
            <ReactPaginate
                previousLabel="в будущее"
                nextLabel="в прошлое"
                breakLabel="..."
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName="pagination"
                previousLinkClassName="previous"
                nextLinkClassName="next"
                activeLinkClassName="paginationActive"
                activeClassName={'active'} />
        </div>
    )
}


export default Pag