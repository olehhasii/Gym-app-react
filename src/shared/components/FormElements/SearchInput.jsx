import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchInput = () => {
	return (
		<div>
			<h2 className='text-lg font-bold'>Search for new workouts!</h2>
			<div className='relative w-full mt-4'>
				<div>
					<div class='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
						<FaSearch />
					</div>

					<input
						type='text'
						id='simple-search'
						class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan focus:border-cyan block w-full pl-10 p-2.5'
						placeholder='Search'
					/>
				</div>
			</div>
		</div>
	);
};

export default SearchInput;
