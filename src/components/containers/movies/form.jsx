import React, {Component} from 'react'
import momentLocaliser from 'react-widgets-moment'
import moment from 'moment'
import 'react-widgets/dist/css/react-widgets.css'
import {Field, reduxForm} from "redux-form";
import {
    dateTimePickerRenderer,
    dropDownListRenderer,
    fieldRenderer,
    fileFieldRenderer, multiSelectRenderer, textAreaRenderer
} from "../../../helpers/renderers";
import {getRandomInt} from "../../../helpers/random";


momentLocaliser(moment);

const validDataTypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];

const validate = values => {
    const errors = {};
    if (!values.title) {
        errors.title = 'Required'
    } else if (values.title.length < 2) {
        errors.title = 'Must be 2 characters or more'
    } else if (values.title.length > 250) {
        errors.first_name = 'Must be 250 characters or less'
    }
    if (values.cover && values.cover.length) {
        if (-1 === validDataTypes.indexOf(values.cover[0].type)) {
            errors.cover = 'Invalid image type'
        }
    }
    if (!values.duration) {
        errors.duration = 'Required'
    } else if (isNaN(values.duration) || values.duration < 0) {
        errors.duration = 'Must be a positive number'
    }
    if (!values.loan_price) {
        errors.loan_price = 'Required'
    } else if (isNaN(values.loan_price) || values.loan_price < 0) {
        errors.loan_price = 'Must be a valid number'
    }
    if (!values.classification) {
        errors.classification = 'Required'
    }
    return errors
};

const classifications = ['G', 'PG', 'PG-13', 'R', 'NC-17'];

class Form extends Component {

    componentDidMount() {
        let {movie} = this.props;
        if (undefined === movie) {
            this.props.initialize({
                duration: getRandomInt(45, 200),
                release_date: new Date(),
                loan_price: getRandomInt(2, 20),
                classification: 'R',
                country: 'usa'
            });
        } else {
            this.props.initialize({
                title: movie.title,
                duration: movie.duration,
                release_date: moment(movie.release_date),
                loan_price: movie.loan_price,
                classification: movie.classification,
                country: movie.country,
                id: movie.id,
                category_list: movie.categories.map(category => category.name),
                synopsis: movie.synopsis
            });
        }
    }

    render() {
        const {movie, handleSubmit, pristine, submitting, reset} = this.props;
        const categories = (undefined !== movie) ? movie.categories.map(category => category.name) : [],
            directors = (undefined !== movie) ? movie.directors.map(director => director.name) : [],
            writers = (undefined !== movie) ? movie.writers.map(writer => writer.name) : [],
            actors = (undefined !== movie) ? movie.actors.map(actor => actor.name) : [];
        return (
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-6 col-lg-6">
                        <input type='hidden' name='id' id='id'/>
                        <label htmlFor="title">Title</label>
                        <Field name="title" type="text" component={fieldRenderer} label="Title"
                               id='title'/>
                        <label htmlFor="cover">Cover</label>
                        <Field name='cover' type='file' id='cover' component={fileFieldRenderer}
                               label='Cover'/>
                        <label htmlFor="duration">Duration (minutes)</label>
                        <Field name="duration" type="number" component={fieldRenderer}
                               label="Duration"
                               id='duration'/>
                        <label htmlFor="release_date">Release Date</label>
                        <Field name="release_date" showTime={false}
                               component={dateTimePickerRenderer}
                               label="Release Date"
                               id='release_date'/>
                        <label htmlFor="classification">Classification</label>
                        <Field name="classification" id='classification'
                               component={dropDownListRenderer}
                               data={classifications} defaultValue={'R'}/>
                        <label htmlFor="synopsis">Synopsis</label>
                        <Field name="synopsis" component={textAreaRenderer} label="Synopsis"
                               id='synopsis'/>
                    </div>
                    <div className="col-6 col-lg-6">
                        <label htmlFor="loan_price">Loan Price (USD)</label>
                        <Field name="loan_price" type="number" component={fieldRenderer}
                               label="Loan Price"
                               id='loan_price'/>
                        <label htmlFor="country">Country</label>
                        <Field name="country" type="text" component={fieldRenderer} label="Country"
                               id='country'/>
                        <label htmlFor="category_list">Categories</label>
                        <Field name="category_list" id='category_list'
                               component={multiSelectRenderer}
                               data={categories} defaultValue={categories}/>
                        <label htmlFor="director_list">Directors</label>
                        <Field name="director_list" id='director_list'
                               component={multiSelectRenderer}
                               data={directors} defaultValue={directors}/>
                        <label htmlFor="writer_list">Writers</label>
                        <Field name="writer_list" id='writer_list' component={multiSelectRenderer}
                               data={writers} defaultValue={writers}/>
                        <label htmlFor="actor_list">Actors</label>
                        <Field name="actor_list" id='actor_list' component={multiSelectRenderer}
                               data={actors} defaultValue={actors}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-sm" disabled={submitting}>Add
                </button>
                <button type="button" className='btn btn-sm' disabled={pristine || submitting}
                        onClick={reset}>
                    Reset
                </button>
            </form>
        )
    }
}

export default reduxForm({form: 'movieForm', validate})(Form);

