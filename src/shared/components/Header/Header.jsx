import React from 'react';
import { Avatar, FormControlLabel, Switch } from '@mui/material';
import { MdDarkMode } from 'react-icons/md';

import SearchInput from '../FormElements/SearchInput';
import pf from '../../../assets/avatar.jpg';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header className='flex justify-between border-0 border-b border-solid border-gray-300 px-10 h-20 fixed top-0 right-0 w-72 header-width '>
			<SearchInput />
			<div className='flex items-center z-20'>
				<FormControlLabel
					label={<MdDarkMode className='w-6 h-6' />}
					control={<Switch />}
				/>
				<NavLink to='/profile'>
					<Avatar alt='Remy Sharp' src={pf} />
				</NavLink>
			</div>
		</header>
	);
};

export default Header;
