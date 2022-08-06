import React from 'react';

import Card from '../../shared/components/UI/Card';
import ProgramItem from '../components/ProgramItem';

const UserPrograms = () => {
	return (
		<Card className='flex flex-wrap justify-start overflow-auto'>
			<ProgramItem />
			<ProgramItem />
			<ProgramItem />
		</Card>
	);
};

export default UserPrograms;
