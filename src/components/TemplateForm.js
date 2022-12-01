import React from "react";
import PropTypes from "prop-types";

function TemplateForm(props) {
  const formStyle = {
    marginTop: '45px',
    margin: '20px',
    border: '3px solid grey',
    padding: '25px',
    display: 'flex',
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between'
  }
  const rowElement = {
    padding: '15px'
  }
  return (
    <div style={formStyle}>
      <form onSubmit={props.formSubmissionHandler}>
        <div style={rowElement}>
        <input
          type='text'
          name='author'
          placeholder='author'/>
        </div>
        <div style={rowElement}>
        <input
          type='text'
          name='title'
          placeholder="Title" />
        </div>
        <div style={rowElement}>
        <textarea
          cols='30'
          rows='6'
          name='body'
          placeholder="Insert your bad opinion here" />
        </div>
        <button type="submit">POST</button>
      </form>
    </div>
  );
}

TemplateForm.propTypes = {
  formSubmissionHandler: PropTypes.func
}

export default TemplateForm;