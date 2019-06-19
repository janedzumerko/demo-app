import React from 'react';
import { Button, Form, FormFeedback, FormGroup, FormText, Input } from 'reactstrap';
import styles from './Newsletter.module.css';

const Newsletter = () => {
	return (
		<div className={styles.wrapper}>
			<Form>
				<FormGroup className={styles.form}>
					<div className={styles.inputWrapper}>
						<Input
							className={styles.input}
							placeholder="Sign up to our mailing list"
						/>
						<Button className={styles.button} color="secondary">
							subscribe
						</Button>
					</div>

					<FormFeedback valid>Sweet! that name is available</FormFeedback>
					<FormText color="white">
						We'll send you product news and special offers once or twice a
						month. <br />
						By subscribing to the newsletter, you also agree to our privacy
						terms.
					</FormText>
				</FormGroup>
			</Form>
		</div>
	);
};

export default Newsletter;
