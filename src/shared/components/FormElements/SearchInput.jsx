import { Button } from '@mui/material';
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchInput = () => {
	return (
		<div>
			<div className='relative w-full mt-4'>
				<div className='flex'>
					<div className='flex absolute top-3 left-0 items-center pl-3 pointer-events-none'>
						<FaSearch />
					</div>
					<input
						type='text'
						id='simple-search'
						className='mr-2 block w-1/2  min-w-full pl-10 p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan focus:border-cyan '
						placeholder='Search for the workouts'
					/>
					<Button variant='contained'>Search</Button>
				</div>
			</div>
		</div>
	);
};

export default SearchInput;
