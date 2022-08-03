import React from 'react';
import { FaBiking, FaUserCircle } from 'react-icons/fa';

import LinksLisk from './LinksLisk';
import MenuLink from './MenuLink';

const SideMenu = () => {
	return (
		<nav className='absolute left-0 top-0 flex flex-col items-center overflow-hidden w-40 h-full rounded-xl text-lg  bg-white'>
			<div className=''>
				<MenuLink to='/' linkName='Gym App' hover=' '>
					<FaBiking className='w-8 h-8' />
				</MenuLink>
			</div>
			<div className='mt-4 h-px bg-black w-11/12'></div>
			<LinksLisk />
			<div className='w-full mt-auto px-2 flex items-center justify-center h-16 bg-gray-200 hover:bg-gray-300'>
				<MenuLink linkName='Account' hover='hover:bg-gray-300' to='/'>
					<FaUserCircle className='w-6 h-6' />
				</MenuLink>
			</div>
		</nav>
	);
};
export default SideMenu;
