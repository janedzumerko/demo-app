import React from 'react';
import classes from './Button.module.scss';

function Button(props) {
	return (
		<button
			onClick={props.click}
			className={`${classes.btn} ${classes[props.btnStyle]}`}
			type="button"
		>
			{props.children}
		</button>
	);
}

export default Button;
