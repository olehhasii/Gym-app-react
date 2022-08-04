import React from 'react';

import SearchInput from '../../shared/components/FormElements/SearchInput';
import CardsList from '../components/CardsList';

const Main = () => {
	return (
		<div className='center  w-5/6 h-5/6  bg-white rounded-xl '>
			<SearchInput />
			<CardsList />
		</div>
	);
};

export default Main;
