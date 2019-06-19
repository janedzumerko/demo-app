import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import styles from './HoverControlledDropdown.module.css';

const HoverControlledDropdown = props => {
	const [isOpen, updateIsOpen] = useState(false);

	const { title, onItemClick } = props;

	return (
		<Dropdown
			onMouseOver={() => updateIsOpen(true)}
			onMouseLeave={() => updateIsOpen(false)}
			toggle={() => updateIsOpen(!isOpen)}
			isOpen={isOpen}
		>
			<DropdownToggle
				caret
				tag="span"
				className={styles.dropdown}
				style={
					isOpen
						? {
								backgroundColor: 'white',
						  }
						: { backgroundColor: 'transparent' }
				}
			>
				<span
					className={styles.dropdownItem}
					style={
						isOpen
							? {
									padding: '8px 0',
									borderBottom: '1px solid black',
							  }
							: {
									border: '0',
							  }
					}
				>
					{title}
				</span>
			</DropdownToggle>
			<DropdownMenu className={styles.dropdownMenu}>
				<DropdownItem onClick={() => onItemClick('One')}>
					One Action Some Long text here
				</DropdownItem>
				<DropdownItem onClick={() => onItemClick('Two yes')}>
					Two Action
				</DropdownItem>
				<DropdownItem onClick={() => onItemClick('Three')}>
					Three Action
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
};

export default HoverControlledDropdown;
