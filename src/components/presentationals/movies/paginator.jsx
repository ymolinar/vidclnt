import React from 'react'
import {Link} from "react-router-dom";

const pagination = (current_page, total_pages) => {
    let current = current_page,
        last = total_pages,
        delta = 2,
        left = current - delta,
        right = current + delta + 1,
        range = [],
        rangeWithDots = [],
        l;

    for (let i = 1; i <= last; i++) {
        if (i === 1 || i === last || i >= left && i < right) {
            range.push(i);
        }
    }

    for (let i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push('...');
            }
        }
        rangeWithDots.push(i);
        l = i;
    }

    return rangeWithDots;
};

export const MoviePaginator = ({filters, handlePageChange}) => {
    const items = pagination(filters.current_page, filters.total_pages);
    return (
        <div className="shop_page_nav d-flex flex-row">
            <div
                className="page_prev d-flex flex-column align-items-center justify-content-center">
                <Link to={'/'} onClick={handlePageChange}><i className="fas fa-chevron-left" data-index={1}/></Link>
            </div>
            <ul className="page_nav d-flex flex-row">
                {items.map((item, index) => {
                    if ('...' === item) {
                        return <li key={index}><span>...</span></li>
                    } else if (filters.current_page === item) {
                        return <li key={index}><span>{item}</span></li>
                    } else {
                        return <li key={index}><Link data-index={item} to={'/'} onClick={handlePageChange}>{item}</Link>
                        </li>
                    }
                })}
            </ul>
            <div
                className="page_next d-flex flex-column align-items-center justify-content-center">
                <Link to={'/'} onClick={handlePageChange}><i className="fas fa-chevron-right"
                                                             data-index={filters.total_pages}/>
                </Link>
            </div>
        </div>
    )
};