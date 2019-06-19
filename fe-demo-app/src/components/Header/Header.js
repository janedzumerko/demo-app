import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import HoverControlledDropdown from '../HoverControlledDropdown/HoverControlledDropdown';
import styles from './Header.module.css';

class Header extends Component {
	onItemClick = item => {
		console.log('Clciked ', item);
	};
	render() {
		return (
			<div className={styles.content}>
				<div>
					<NavLink to="/">
						<Button color="danger">Logo!</Button>
					</NavLink>
				</div>

				<ul className={styles.menu}>
					<li>
						<HoverControlledDropdown
							title="Item 1"
							onItemClick={this.onItemClick}
						/>
					</li>
					<li>
						<HoverControlledDropdown
							title="Item Long title"
							onItemClick={this.onItemClick}
						/>
					</li>
					<li>
						<HoverControlledDropdown
							title="Item 3"
							onItemClick={this.onItemClick}
						/>
					</li>
					<li>
						<div className={styles.item}>Brands</div>
					</li>
					<li>
						<div className={styles.item}>Sale</div>
					</li>
					<li>
						<div className={styles.item}>
							<NavLink to="/login">
								<FontAwesomeIcon icon={faUser} />
							</NavLink>
						</div>
					</li>
					<li>
						<div className={styles.item}>
							<FontAwesomeIcon icon={faSearch} />
						</div>
					</li>
					<li>
						<HoverControlledDropdown
							title="Language"
							onItemClick={this.onItemClick}
						/>
					</li>
					<li>
						<div className={styles.item}>
							<FontAwesomeIcon icon={faShoppingCart} />
						</div>
					</li>
				</ul>
			</div>
		);
	}
}

export default Header;
