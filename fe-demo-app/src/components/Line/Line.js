import React from 'react';
import styles from './Line.module.css';

const Line = ({ big }) => {
	return (
		<hr
			className={styles.line}
			style={big ? { margin: '60px auto' } : { margin: '20px auto' }}
		/>
	);
};

export default Line;
