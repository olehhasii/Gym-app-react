import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuLink = (props) => {
	return (
		<NavLink
			activeClassName=' bg-lightGreen'
			to={props.to}
			className={`flex items-center w-full h-full py-3 px-4 rounded-md   ${
				props.hover || 'hover:bg-gray-200'
			}`}
		>
			{props.children}
			<span className={`${props.text || 'ml-2 text-sm'}`}>
				{props.linkName}
			</span>
		</NavLink>
	);
};

export default MenuLink;
