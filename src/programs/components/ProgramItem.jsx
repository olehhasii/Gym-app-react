import { Button } from '@mui/material';
import React from 'react';

import './Program.css';

const ProgramItem = () => {
	return (
		<div class='courses-container'>
			<div className='bg-white rounded-xl shadow-lg shadow-top flex max-w-full w-700px m-5 overflow-hidden'>
				<div class='bg-keppeldark  max-w-64 p-6'>
					<h6 className='opacity-80 uppercase'>Program</h6>
					<h2 className='my-2 text-2xl font-bold'>Chest + Biceps</h2>
				</div>
				<div class='p-8 relative w-full'>
					<h6>Chapter 4</h6>
					<h2>Callbacks & Closures</h2>
					<Button
						variant='contained'
						color='success'
						className='absolute top-7 left-64 w-24 '
					>
						Edit
					</Button>
					<Button
						variant='contained'
						color='error'
						className='absolute top-7 left-72 w-24 '
					>
						Delete
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ProgramItem;
