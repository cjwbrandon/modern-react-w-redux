import React from "react";
import { Field, reduxForm } from "redux-form";

const renderError = ({ error, touched }) => {
  if (touched && error) {
    // Note: Error message are hidden on default -> add 'error' className on the outer Elements
    return (
      <div className="ui error message">
        <div className="header">{error}</div>
      </div>
    );
  }
};

const renderInput = (formProps) => {
  const className = `field ${
    formProps.meta.error && formProps.meta.touched ? "error" : ""
  }`;

  return (
    <div className={className}>
      <label>{formProps.label}</label>
      <input {...formProps.input} autoComplete="off" />
      {renderError(formProps.meta)}
    </div>
  );
};

const StreamForm = (props) => {
  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  };

  return (
    <form className="ui form error" onSubmit={props.handleSubmit(onSubmit)}>
      <Field name="title" component={renderInput} label="Enter Title" />
      <Field
        name="description"
        component={renderInput}
        label="Enter Description"
      />
      <button className="ui button primary">Submit</button>
    </form>
  );
};

const validate = (formValues) => {
  const errors = {};
  // Errors properties must be the same as the name of the Field!
  if (!formValues.title) errors.title = "You must enter a title";
  if (!formValues.description)
    errors.description = "You must enter a description";
  return errors;
};

export default reduxForm({ form: "streamForm", validate })(StreamForm);
