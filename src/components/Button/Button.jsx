import React from 'react';

const Button = ({ clickFunction, label, color, background, width }) => {
	const styles = {
		color: color || '#ffffff',
		background: background || '#0091ff',
		minWidth: width || '120px',
	};
	return (
		<button style={styles} onClick={clickFunction}>
			{label}
		</button>
	);
};

export default Button;
