import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import FeatureItem from '../FeatureItem/FeatureItem';
import Section from '../Section/Section';
import styles from './Main.module.css';
import ProductItem from '../ProductItem/ProductItem';
import Newsletter from '../Newsletter/Newsletter';
import Store from '../Store/Store';

const Main = () => {
	return (

		<main className={styles.main}>
			<p>30+ EUROPEAN ECO FASHION LABELS!</p>

			<p> SUSTAINABLE | ORGANIC | RECYCLED | FAIR TRADE | VEGAN</p>

			<p>
				<Button className={styles.button} color="link">
					MAN
					</Button>
				<Button className={styles.button} color="link">
					WOMAN
					</Button>
				<Button className={styles.button} color="link">
					KIDS
					</Button>
			</p>
			<p> INTERNATIONAL SHIPPING</p>

			<p>
				<Button className={styles.button} color="link">
					CHECK OUT OUR NEW BLOGSITE{' '}
				</Button>
			</p>

			<Section title="Feature Labels">
				<Row>
					<Col>
						<FeatureItem />
					</Col>
					<Col>
						<FeatureItem />
					</Col>
					<Col>
						<FeatureItem />
					</Col>
				</Row>
				<Row>
					<Col>
						<FeatureItem />
					</Col>
					<Col>
						<FeatureItem />
					</Col>
					<Col>
						<FeatureItem />
					</Col>
				</Row>
			</Section>

			<Section title="Product Items">
				<Row>
					<Col>
						<ProductItem />
					</Col>
					<Col>
						<ProductItem />
					</Col>
					<Col>
						<ProductItem />
					</Col>
				</Row>
				<Row>
					<Col>
						<ProductItem />
					</Col>
					<Col>
						<ProductItem />
					</Col>
					<Col>
						<ProductItem />
					</Col>
				</Row>
				<Row>
					<Col>
						<ProductItem />
					</Col>
					<Col>
						<ProductItem />
					</Col>
					<Col>
						<ProductItem />
					</Col>
				</Row>
			</Section>

			<Section title="New Products">

				<Row>
					<Col>
						<ProductItem />
					</Col>
					<Col>
						<ProductItem />
					</Col>
					<Col>
						<ProductItem />
					</Col>
				</Row>
			</Section>

			<Newsletter />

			<Store />
		</main>

	);
};

export default Main;
