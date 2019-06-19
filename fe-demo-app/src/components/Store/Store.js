import React from 'react';
import styles from './Store.module.css';

const Store = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.store}>
				<div className={styles.storeInfo}>
					<h2>OUR STORE</h2>
					<p>OPENING HOURS</p>
					<p>Monday - Friday: 10am - 7pm</p>
					<p>Saturday: 10am - 6pm</p>
					<p>Sunday: 11am - 5pm</p>
					<p>PHONE: +420 737422402</p>
					<p>How to get there:</p>
					<p>Tram/Bus stop: Jana Masaryka - 0 m</p>
					<p>Metro station: Namesti Miru - 200m</p>
				</div>

				<div className={styles.storeItem}>
					<img
						className={styles.storeImage}
						src="https://cdn.shopify.com/s/files/1/1852/7073/files/20180125_145143_600x600.jpg?v=1521754534"
						alt="Store for our"
					/>
				</div>
			</div>
		</div>
	);
};

export default Store;
