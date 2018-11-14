import React, {Component} from 'react'
import {LoanList} from "../../presentationals/user/loans/list";

export default class Loans extends Component {
    componentDidMount() {
        this.props.allLoans(this.props.user.id)
    }

    handleReturnLoan = e => {
        e.preventDefault();
        this.props.returnLoan(this.props.user.id, e.target.dataset.index)
    };

    render() {
        return (
            <LoanList options={this.props.options} loadingLoan={this.props.loansState.loading}
                      loans={this.props.loansState.loans} returnLoan={this.handleReturnLoan}/>
        );
    }
}