import React from 'react';
import classes from './Label.module.scss';

function Label(props) {
	return (
		<label className={classes.lbl}>
			<span>{props.title}</span>
			<input type={props.type} />
		</label>
	);
}

export default Label;
