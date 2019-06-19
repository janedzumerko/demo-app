import React from 'react';
import styles from './FeatureItem.module.css';

const FeatureItem = () => (
	<div className={styles.item}>
		<div className={styles.inside} />
		<div className={styles.temp}>
			<span className={styles.text}>Good Guys Don't Wear Leather</span>
		</div>
	</div>
);

export default FeatureItem;
