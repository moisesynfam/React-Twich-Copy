import React from 'react';
import { Field, reduxForm } from 'redux-form';
class StreamCreate extends React.Component {

    renderInput = ({input, label}) => {
    
        return (
            <div className="field">
                <label htmlFor={input.name}>
                    {label}
                </label>
                <input

                value={input.value}
                onChange={input.onChange}
                />
            </div>
           
        )
    }

    onSubmit = formData => {
        console.log(formData);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'newStream'
})(StreamCreate);