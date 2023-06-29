import React from 'react';

const Button = ({ clickFunction, label, color, background, width, className }) => {
	const styles = {
		color: color || '#ffffff',
		background: background || '#0091ff',
		minWidth: width || '120px',
	};
	return (
		<button className={className} style={styles} onClick={clickFunction}>
			{label}
		</button>
	);
};

export default Button;
