import React from 'react'
import {Link} from "react-router-dom";


export const FilterLink = ({filters, type, children, handleFilter}) => {
    if (filters[type] === children) {
        return <li className={type}><span className="badge badge-secondary">{children}</span></li>
    }
    return <li className={type}><Link to={'/'} onClick={handleFilter}>{children}</Link></li>
};