import TemplateForm from "./TemplateForm";
import React from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';

function NewPostForm(props){

	function handleNewPostSubmit(event){
		event.preventDefault();
		props.onNewPost({
			title: event.target.title.value,
			body: event.target.body.value,
			author: event.target.author.value,
			timestamp: Date.now().toLocaleDateString(),
			votes: 0,
			id: v4()
		});
	}

	return (
		<div>
			<TemplateForm
			formSubmissionHandler={handleNewPostSubmit} />
		</div>
	);
}

export default NewPostForm