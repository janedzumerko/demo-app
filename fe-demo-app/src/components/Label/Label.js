import React from 'react';
import classes from './Label.module.scss';

function Label(props) {
	return (
		<label className={classes.lbl}>
			<span>{props.title}</span>
			<input onChange={props.change} name={props.name} type={props.type} />
		</label>
	);
}

export default Label;
