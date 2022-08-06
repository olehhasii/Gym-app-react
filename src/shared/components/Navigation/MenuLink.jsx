import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuLink = (props) => {
	return (
		<NavLink
			activeClassName='bg-gray-300'
			to={props.to}
			className={`flex items-center w-full h-full  rounded px-3 mt-3 ${
				props.hover || 'hover:bg-gray-300'
			}`}
		>
			{props.children}
			<span className='ml-2 text-l font-bold'>{props.linkName}</span>
		</NavLink>
	);
};

export default MenuLink;
