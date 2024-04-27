import React, { useState, useEffect } from 'react'
import axios from 'axios'
import usePagination from '../hooks/usePagination'

const Pagination = ({totalCount, siblingCount = 1, currentPage, pageSize}) => {

    const paginationRange = usePagination({totalCount, pageSize, siblingCount, currentPage}) as [];

    console.log(paginationRange)
    if (currentPage == 0 || paginationRange.length < 2) {
        return null
    }

    const lastPage = paginationRange[paginationRange.length - 1]

    return(
        <nav>
            <ul className='pagination'>
                {/* <li className='page-item'>
                    <a onClick={() => { }}>{'<'}</a>
                </li> */}
                {paginationRange.map((p, index) => (
                    <li key={index} className='page-item'>
                        <a href='#' className='page-link' onClick={() => {}}>{p}</a>
                    </li>
                ))}
                {/* <li className='page-item'>
                    <a onClick={() => { }}>{'>'}</a>
                </li> */}

            </ul>
        </nav>
    )
}

const Ex11 = () => {
  return (
    <div className='container mt-5 mb-5'>
        <Pagination totalCount={101} pageSize={10} currentPage={5} />
    </div>
  )
}

export default Ex11