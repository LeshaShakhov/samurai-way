import React, {useState} from "react";
import Range from "../../../Utils/Range";
import './Paginator.css'

const Paginator = ({
    itemsPerPage, totalItems,
    currentPage, onPageChanged,
    pagesCount
    }) => {
    const [paginationValue, setPaginationValue] = useState(0);

    const decreasePaginationValue = () => {
        let currValue = paginationValue;
        currValue > 0 ? setPaginationValue(--currValue) : 0;
    }

    const increasePaginationValue = () => {
        let currValue = paginationValue;
        setPaginationValue(++currValue);
    }

    return (
        <div className="pagination">
            {(paginationValue > 0) && <span onClick={() => {
                decreasePaginationValue()
            }}>&larr;</span>}
            {
                Range(1 + (pagesCount * paginationValue), pagesCount + (pagesCount * paginationValue))
                    .map(page => {
                        if (page * itemsPerPage <= totalItems) {
                            return <span key={page}
                                         className={(page === currentPage) ? 'active' : ''}
                                         onClick={() => {
                                             onPageChanged(page)
                                         }}>{page}
                                        </span>
                        }
                    })
            }
            {((paginationValue + 1) * itemsPerPage * 5 < totalItems) && <span onClick={() => {
                increasePaginationValue()
            }}>&rarr;</span>}
        </div>
    )
}

export default Paginator;