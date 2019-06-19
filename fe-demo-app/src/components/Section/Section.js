import React from 'react';
import Line from '../Line/Line';
import styles from './Section.module.css';

const Section = ({ children, title }) => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.header}>
				<h2>{title}</h2>
				<Line />
			</div>

			{children}
		</section>
	);
};

export default Section;
