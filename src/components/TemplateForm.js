import React from "react";
import PropTypes from "prop-types";

function TemplateForm(props) {
  return (
    <form onSubmit={props.formSubmissionHanlder}>
      <input
        type='text'
        name='title'
        placeholder="Title" />
      <textarea
        name='body'
        placeholder="Insert your bad opinion here" />
      <button type="submit">Post</button>
    </form>
  );
}