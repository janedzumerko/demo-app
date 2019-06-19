import React from 'react';
import { Button } from 'reactstrap';
import Header from '../Header/Header';
import styles from './Landing.module.css';

const Landing = () => {
	return (
		<div className={styles.bg}>
			<Header />
			<div style={{ textAlign: 'center' }}>
				<p className={styles.title}>NEW COLLECTION</p>
				<Button outline className={styles.button} size="lg">
					SHOP NOW
				</Button>
			</div>
			<div />
			{/* <p className={styles.title}>Demo app</p> */}
		</div>
	);
};

export default Landing;
