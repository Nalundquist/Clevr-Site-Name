import React from "react";
import PropTypes from "prop-types";

function TemplateForm(props) {
  return (
    <form onSubmit={props.formSubmissionHandler}>
      <input
        type='text'
        name='author'
        placeholder='author'/>
      <input
        type='text'
        name='title'
        placeholder="Title" />
      <textarea
        name='body'
        placeholder="Insert your bad opinion here" />
      <button type="submit">POST</button>
    </form>
  );
}

TemplateForm.propTypes = {
  formSubmissionHandler: PropTypes.func
}

export default TemplateForm;