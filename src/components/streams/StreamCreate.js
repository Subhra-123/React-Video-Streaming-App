import React from 'react';
import { Field, reduxForm } from 'redux-form';
class StreamCreate extends React.Component {
    renderError=({touched,error})=>{
        if(touched&&error)
        return (
            <div className="ui error message">{error}</div>
        )

    }
    renderInput=({ input, label,meta })=> {
        
        console.log(meta);
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}

            </div>
        )
    }
    onSubmit(formValues){
       console.log(formValues);
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Title" />
                <Field name="description" component={this.renderInput} label="Description" />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}
const validate=(formValues)=>{
    const errors={};
    if(!formValues.title)
    errors.title='You Must Enter A Title'
    if(!formValues.description)
    errors.description='You Must Enter A Description'

    return errors;
}
export default reduxForm({
    form: 'streamCreate',
    validate:validate
})(StreamCreate);