import React, {useEffect, useState} from "react";
import Range from "../../../Utils/Range";
import './Paginator.css'
import cn from "classnames";
import {useLocation} from "react-router";

interface PropsTypes {
    itemsPerPage: number,
    totalItems: number,
    currentPage: number,
    onPageChanged: (page:number)=>void,
    pagesCount: number
    paginationValue:number
    setPaginationValue: (value:number)=>void
}

const Paginator: React.FC<PropsTypes> = ({
    itemsPerPage, totalItems,
    currentPage, onPageChanged,
    pagesCount, paginationValue, setPaginationValue
    }) => {

    const decreasePaginationValue = () => {
        let currValue = paginationValue;
        return currValue > 0 ? setPaginationValue(--currValue) : 0;
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
                        if (page * itemsPerPage < totalItems + pagesCount && totalItems >= itemsPerPage) {
                            return <span key={page}
                                         className={cn({active : page === currentPage})}
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