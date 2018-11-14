import React from 'react'
import {FilterLink} from "./filter_link";

export const MovieFilter = ({filters, categories, loadingCategories, handleFilter, handleClearFilter}) => {
    return (
        <div className="shop_sidebar">
            <div className="sidebar_section">
                <div className="sidebar_title">Categories</div>
                {(loadingCategories) ? <h5>Loading categories...</h5> : (categories.length === 0) ?
                    <h5>No categories to show.</h5> : <ul className="sidebar_categories">
                        {categories.map(category => {
                            return (
                                <FilterLink filters={filters} key={category.id} type='category'
                                            handleFilter={handleFilter}>{category.name}</FilterLink>
                            )
                        })}
                    </ul>}
            </div>
            <div className="sidebar_section">
                <div className="sidebar_subtitle brands_subtitle">Brands</div>
                <ul className="brands_list">
                    {['G', 'PG', 'PG-13', 'R', 'NC-17'].map((classification, index) => {
                        return (
                            <FilterLink filters={filters} key={index} type='classification'
                                        handleFilter={handleFilter}>{classification}</FilterLink>
                        )
                    })}
                </ul>
            </div>
            <div className="sidebar_section">
                <button className='btn btn-sm btn-primary' onClick={handleClearFilter}>Clear</button>
            </div>
        </div>
    );
};