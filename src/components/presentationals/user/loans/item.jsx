import React from 'react'
import {Link} from "react-router-dom";


export const LoanItem = ({loan, options, returnLoan}) => {
    const invoiceTotal = (movies) => {
        if (1 === movies.length) {
            return movies[0].loan_price
        }
        return movies.reduce((first, second) => {
            let sum;
            if ('object' === typeof first) {
                sum = parseFloat(first.loan_price)
            } else {
                sum = parseFloat(first)
            }
            return sum + parseFloat(second.loan_price)
        })
    };
    return (
        <div className={'card' + ((loan.status === 'active') ? ' loan_active' : '')}>
            <div className="card-header">
                {loan.status === 'active' &&
                <Link className='btn btn-sm btn-primary pull-right' to='/user/profile/loans' data-index={loan.id}
                      onClick={returnLoan}>Return movies</Link>}
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-6">
                        <h5>From:</h5>
                        <address>
                            <strong>{options.info.site_name}</strong><br/>
                            17 Princess Road, London<br/>
                            Grester London NW18JR, UK<br/>
                            <abbr title="Phone">P:</abbr> {options.info.phone}<br/>
                            <abbr title="Phone">E:</abbr> {options.info.email}
                        </address>
                    </div>

                    <div className="col-sm-6 text-right">
                        <h4>Invoice No.</h4>
                        <h4 className="text-navy">INV-000567F7-{loan.id}</h4>
                        <p>
                            <span><strong>Invoice Date:</strong> {loan.created_at}</span><br/>
                            <span><strong>Due Date:</strong> {loan.expire_at}</span><br/>
                            <span><strong>Due Date:</strong> March 24, 2014</span>
                        </p>
                    </div>
                </div>
                <div className="table-responsive m-t">
                    <table className="table invoice-table">
                        <thead>
                        <tr>
                            <th>Item List</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Tax</th>
                            <th>Total Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {loan.movies.map(movie => (
                            <tr key={movie.id}>
                                <td>
                                    <div><strong>{movie.title}</strong></div>
                                    <small>{movie.synopsis}</small>
                                </td>
                                <td>1</td>
                                <td>${movie.loan_price}</td>
                                <td>$0</td>
                                <td>${movie.loan_price}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <table className="table invoice-total">
                    <tbody>
                    <tr>
                        <td><strong>Sub Total :</strong></td>
                        <td>${invoiceTotal(loan.movies)}</td>
                    </tr>
                    <tr>
                        <td><strong>TAX :</strong></td>
                        <td>$0</td>
                    </tr>
                    <tr>
                        <td><strong>TOTAL :</strong></td>
                        <td>${invoiceTotal(loan.movies)}</td>
                    </tr>
                    </tbody>
                </table>
                {/*<h5 className="card-title">Special title treatment</h5>*/}
                {/*<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>*/}
                {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
            </div>
        </div>
    )
};