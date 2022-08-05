import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';

const MainNotAuth = () => {
	const history = useHistory();

	return (
		<div className='w-full h-full bg-white flex flex-col items-center justify-center'>
			<h1 className='font-bold text-4xl text-center'>
				Organize your trainings and meals.
			</h1>
			<h2 className='text-2xl w-1/3 text-center mt-3 mb-3'>
				Become focused, organized, and calm with Gym App. Reach your goals!
			</h2>
			<Button
				color='success'
				variant='contained'
				className='w-44'
				onClick={() => {
					history.push('/login');
				}}
			>
				Login
			</Button>
		</div>
	);
};

export default MainNotAuth;
