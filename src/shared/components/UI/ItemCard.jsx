import React from 'react';

const ItemCard = (props) => {
	return (
		<div className={`${props.width}`}>
			{/* <h2 className='text-xl font-bold underline text-center'>{props.title}</h2> */}
			<div
				className={`${
					props.flex || 'flex flex-col justify-center items-center'
				} rounded-xl ${props.className} shadow-top`}
			>
				{props.children}
			</div>
		</div>
	);
};

export default ItemCard;
