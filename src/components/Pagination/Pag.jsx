import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import Postcollection from '../postcollection/Postcollection';

const Pag = (props) => {
    const [offset, setOffset] = useState(0)
    const [data, setData] = useState([])
    const [perPage] = useState(props.perPage || 8)
    const [pageCount, setPageCount] = useState(0)

    const getData = async () => {
        try {
            const data = props.items
            const slice = data.slice(offset, offset + perPage)
            setData(slice)
            setPageCount(Math.ceil(data.length / perPage))
        } catch (error) {
            console.log(error);
        }
    }
    const handlePageClick = (e) => {
        const selectedPage = e.selected
        setOffset(selectedPage + 3)
    }
    useEffect(() => { getData() })
    const collection = data.map(post => {
        return <div key={post.id} className="postscollection-item">
            <Postcollection post={post} category={props.category} />
        </div>
    })

    return (
        <div className="postfeed">
            {collection}
            <ReactPaginate
                previousLabel="в будущее"
                nextLabel="в прошлое"
                breakLabel="..."
                pageCount={pageCount}
                pageRangeDisplayed={2}
                marginPagesDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName="pagination"
                previousLinkClassName="previous"
                nextLinkClassName="next"
                activeLinkClassName="paginationActive"
            />
        </div>
    )
}


export default Pag