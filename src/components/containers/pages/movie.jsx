import React, {Component} from 'react'
import MovieForm from "../movies/form";

export default class FormPage extends Component {

    handleFormSubmit = values => {
        if (this.props.selectedMovie) {
            this.props.updateMovie(values);
        }
        else {
            this.props.addMovie(values);
        }
    };

    componentDidMount() {
        if (this.props.match.params.id)
            this.props.getMovie(this.props.match.params.id)
    }

    render() {
        const {loadingMovie, selectedMovie, match} = this.props;
        return (
            <div className="shop">
                <div className="container">
                    <div className="row">
                        {(loadingMovie) ? <div className="col-lg-10 offset-lg-1"><h3>Loading movie...</h3>
                        </div> : (selectedMovie === undefined && match.params.id) ?
                            <div className="col-lg-10 offset-lg-1"><h3>Movie not found.</h3></div> :
                            <div className="col-lg-10 offset-lg-1">
                                <MovieForm match={match} movie={selectedMovie} onSubmit={this.handleFormSubmit}/>
                            </div>}
                    </div>
                </div>
            </div>
        )
    }
}