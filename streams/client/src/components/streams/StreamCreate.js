import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      // Note: Error message are hidden on default -> add 'error' className on the outer Elements
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  // Whenever the component is called in Field, it returns a props which intains the input and meta
  renderInput = (formProps) => {
    // console.log(formProps.meta); // metadata -> shows error, touched, etc

    const className = `field ${
      formProps.meta.error && formProps.meta.touched ? "error" : ""
    }`;
    // Hook up the value and onChange from props to the Input Element manually
    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete="off" />
        {this.renderError(formProps.meta)}
      </div>
    );
    // <input
    //     onChange={formProps.input.onChange}
    //     value={formProps.input.value}
    //   />
  };

  // Field values are pasrsed as input
  onSubmit = (formValues) => {
    // Redux-form takes care of this for us
    // event.preventDefault();
    // console.log(formValues);

    this.props.createStream(formValues);
  };

  render() {
    // add className of 'error' to show error messages
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        {/* Specify component to show field on screen -> react component or function for the field to call -> returns the element to be displayed */}
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

// Input Validation
const validate = (formValues) => {
  const errors = {};
  // Errors properties must be the same as the name of the Field!
  if (!formValues.title) errors.title = "You must enter a title";
  if (!formValues.description)
    errors.description = "You must enter a description";
  return errors;
};

// reduxForm -> Similar to connect
const formWrapped = reduxForm({ form: "streamCreate", validate })(StreamCreate);
// Joining connect with reduxForm
export default connect(null, { createStream })(formWrapped);
