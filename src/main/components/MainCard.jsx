import React from 'react';

const MainCard = (props) => {
	return (
		<div className={`${props.width}`}>
			<h2 className='text-xl font-bold underline text-center'>{props.title}</h2>
			<div
				className={`${
					props.flex || 'flex flex-col justify-center items-center'
				} rounded-xl ${props.className} `}
			>
				{props.children}
			</div>
		</div>
	);
};

export default MainCard;
