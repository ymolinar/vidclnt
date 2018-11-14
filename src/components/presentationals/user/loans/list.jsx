import React from 'react'
import {LoanItem} from "./item";

const List = ({loans, loadingLoan, options, returnLoan}) => {
    return (
        <div>
            {(loadingLoan) ? <h3>Loading loans...</h3> : (loans.length === 0) ?
                <h3>You don't have loans.</h3> :
                loans.map(loan =>
                    <LoanItem key={loan.id} loan={loan} options={options} returnLoan={returnLoan}/>
                )
            }
        </div>
    )
};

export {List as LoanList}