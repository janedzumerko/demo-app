import React from 'react';
import { Col, Row } from 'reactstrap';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<Row>
					<Col className={styles.left}>
						<p>About us</p>
						<p>Contact</p>
						<p>Open Positions</p>
						<p>About us</p>
						<p>Contact</p>
						<p>Open Positions</p>
					</Col>
					<Col className={styles.middle}>
						<p>Facebook</p>
						<p>Pinterest</p>
						<p>Instagram</p>
					</Col>
					<Col className={styles.right}>&copy; 2019 | Demo App</Col>
				</Row>
			</div>
		</footer>
	);
};

export default Footer;
