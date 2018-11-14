import React from 'react'

const orderFields = {
    release_date: 'release date',
    title: 'title',
    duration: 'duration',
};

export const MovieListBar = ({filters, count, handleSorting}) => {
    const moviesCount = (filters, count) => {

        if (filters.total_count > 1) {
            const size = 12;
            let start, end;
            start = (filters.current_page - 1) * size + 1;
            end = start + ((count < size) ? count : size) - 1;
            return <div
                className="shop_product_count">Showing {start}-{end} of <span>{filters.total_count}</span> movies
                found.</div>
        } else if (filters.total_count === 1) {
            return <div className="shop_product_count"><span>1</span> movie found.</div>
        } else {
            return <div className="shop_product_count"><span>No movies found.</span></div>
        }
    };
    const sortList = () => {
        return (
            <li>
                <span className="sorting_text">{orderFields[filters.sortBy]}
                    <i className="fas fa-chevron-down"/>
                </span>
                <ul>
                    {Object.keys(orderFields).map(key => {
                        return (
                            <li className="shop_sorting_button" data-field={key} key={key} onClick={handleSorting}>
                                {orderFields[key]}
                            </li>
                        )
                    })}
                </ul>
            </li>
        )
    };
    return (
        <div className='shop_bar clearfix'>
            {moviesCount(filters, count)}
            <div className="shop_sorting">
                <span>Sort by:</span>
                <ul>
                    {sortList()}
                </ul>
            </div>
        </div>
    )
};