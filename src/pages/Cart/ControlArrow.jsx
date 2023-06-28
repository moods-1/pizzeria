import React from 'react';

const ControlArrow = ({ rotate, clickFunction }) => {
	return (
		<div
			className='control-arrow'
            style={{ transform: `rotate(${rotate || 0}deg)` }}
            onClick={clickFunction}
		>
			<div className='arrow' />
		</div>
	);
};

export default ControlArrow;
