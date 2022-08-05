import React from 'react';

const Card = (props) => {
	return (
		<div
			className={`center w-5/6 h-5/6 bg-white rounded-xl ${props.className}`}
		>
			{props.children}
		</div>
	);
};

export default Card;
