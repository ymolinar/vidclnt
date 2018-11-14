import DateTimePicker from "react-widgets/lib/DateTimePicker";
import DropdownList from "react-widgets/lib/DropdownList";
import Multiselect from "react-widgets/lib/Multiselect";
import React, {Component} from "react";

const dateTimePickerRenderer = ({input: {onChange, value}, showTime, meta: {touched, error}}) => (
    <div className="form-group">
        <DateTimePicker
            onChange={onChange}
            format="MMM DD YYYY"
            time={showTime}
            culture={'en'}
            value={!value ? null : new Date(value)}
        />
        {touched && ((error &&
            <div className="invalid-feedback">
                {error}
            </div>))}
    </div>
);

class multiSelectRenderer extends Component {
    constructor(props) {
        super(props);
        let value;

        if (this.props.defaultValue) {
            value = this.props.defaultValue
        } else {
            value = typeof props.input.value === 'string' ? [] : props.input.value
        }

        this.state = {
            value: value,
            options: this.props.data,
        }
    }

    handleCreate = name => {
        let {options, value} = this.state,
            names = name.split(',');
        names.forEach(element => {
            value = [...value, element.trim()];
            options = [...options, element.trim()]
        });

        this.setState({value, options});
        this.props.input.onChange(value)
    };

    handleChange = value => {
        this.setState({value});
        this.props.input.onChange(value)
    };

    render() {
        let {value, options} = this.state;
        let {touched, error} = this.props.meta;

        return (
            <div className='form-group react-widget-multi-select'>
                <Multiselect
                    data={options}
                    value={value}
                    allowCreate="onFilter"
                    onCreate={this.handleCreate}
                    onChange={this.handleChange}
                />
                {touched && ((error &&
                    <div className="invalid-feedback">
                        {error}
                    </div>))}
            </div>
        )
    }
}

const dropDownListRenderer = ({input, data, valueField, textField, meta: {touched, error}, defaultValue}) => {
    return (
        <div className="form-group react-widget-dropdown">
            <DropdownList {...input}
                          data={data}
                          defaultValue={defaultValue}
                          containerClassName={(touched ? 'is-invalid' : '')}
                          onChange={input.onChange}/>
            {touched && ((error &&
                <div className="invalid-feedback">
                    {error}
                </div>))}
        </div>
    )
};

const textAreaRenderer = ({
                              input, label, meta: {touched, error}
                          }) => (
    <div className="form-group">
        <textarea className={'form-control ' + (touched && (error && 'is-invalid'))} {...input} rows="3"/>
        {touched && ((error &&
            <div className="invalid-feedback">
                {error}
            </div>))}
    </div>
);

const fieldRenderer = ({input, label, type, meta: {touched, error}}) => {
    return (
        <div className="form-group">
            <input {...input} className={'form-control ' + (touched && (error && 'is-invalid'))} placeholder={label}
                   type={type}/>
            {touched && ((error &&
                <div className="invalid-feedback">
                    {error}
                </div>))}
        </div>
    )
};

const fileFieldRenderer = ({input, label, type, meta: {touched, error}}) => {
    delete input.value;
    return (
        <div className="custom-file">
            <input {...input} className={'custom-file-input form-control ' + (touched && (error && 'is-invalid'))}
                   placeholder={label}
                   type={type} accept='.jpg,.jpeg,.png,.gif'/>
            <label className="custom-file-label" htmlFor={input.name}>{label}</label>
            {touched && ((error &&
                <div className="invalid-feedback">
                    {error}
                </div>))}
        </div>
    )
};

export {
    dropDownListRenderer,
    dateTimePickerRenderer,
    fileFieldRenderer,
    fieldRenderer,
    textAreaRenderer,
    multiSelectRenderer
}