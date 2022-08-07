import React from 'react';
import { FaBiking, FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import MenuLink from './MenuLink';
import MenuSections from './MenuSections';

const SideMenu = () => {
	return (
		<div className='min-w-208px h-full'>
			<nav className='fixed left-0 top-0 flex flex-col overflow-hidden w-208px h-full text-lg bg-white border-r border-0 border-solid border-gray-300'>
				<div className='m-4 mt-2'>
					<NavLink
						activeClassName='bg-lightGreen'
						to='/main'
						className='flex items-center w-full h-full p-1 px-4 rounded-md mt-3  
						 hover:bg-gray-200'
					>
						<FaBiking className='w-6 h-6 mr-2' />
						<span className=''>Gym app</span>
					</NavLink>
				</div>
				{<MenuSections />}
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
		</div>
	);
};
export default SideMenu;
