import React from 'react';
import './Spinner.scss';

const sizes = {
	small: '30px',
	medium: '50px',
	large: '70px',
};

const Spinner = ({ size, color, margin }) => {
	const divSize = sizes[size] || '50px';

	const styles = {
		width: divSize,
		height: divSize,
        borderTopColor: color || '#0091ff',
        margin: margin || '0px',
	};

	return <div className='loader' style={styles} />;
};

export default Spinner;
