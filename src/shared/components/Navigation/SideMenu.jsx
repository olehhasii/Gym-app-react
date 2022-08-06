import React from 'react';
import { FaBiking, FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import LinksLisk from './LinksLisk';
import MenuLink from './MenuLink';

const SideMenu = () => {
	return (
		<nav className='fixed left-0 top-0 flex flex-col overflow-hidden w-52 h-full text-lg bg-white border-r border-0 border-solid border-black'>
			<div className='m-4 mt-2'>
				{/* <MenuLink to='/main' linkName='Gym App' text='font-bold text-l'>
					<FaBiking className='w-6 h-6 mr-2' />
				</MenuLink> */}
				<NavLink
					activeClassName='bg-lightGreen'
					to='/main'
					className='flex items-center w-full h-full p-1 rounded-md mt-3  
						 hover:bg-gray-200'
				>
					<FaBiking className='w-6 h-6 mr-2' />
					<span className=''>Gym app</span>
				</NavLink>
			</div>
			{/* <div className='mt-4 h-px bg-black w-11/12 flex justify-center'></div> */}
			<hr className='w-11/12 mx-auto mt-2' />
			<LinksLisk />
			<div className='w-full mt-auto px-2 flex items-center justify-center h-16 bg-gray-200 hover:bg-gray-300'>
				<MenuLink
					linkName='Account'
					hover='hover:bg-gray-300 justify-center'
					text='font-bold text-l'
					to='/account'
				>
					<FaUserCircle className='w-6 h-6 mr-2' />
				</MenuLink>
			</div>
		</nav>
	);
};
export default SideMenu;
