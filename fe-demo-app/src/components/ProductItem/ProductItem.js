import React from 'react';
import styles from './ProductItem.module.css';

const ProductItem = () => (
    <>
        <div className={styles.item}>
            <div className={styles.inside} />
        </div>
        <div className={styles.info}>
            <span>
                Title of product
            </span>
            <br />
            <span>- $60.00</span>
        </div>
    </>
);

export default ProductItem;

// cdn.shopify.com/s/files/1/1852/7073/products/30000759_108330000759-1083_12_grande.jpg?v=1553638991