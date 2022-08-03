import React from 'react';
import { Button } from '@mui/material';

import MainCard from '../components/MainCard';
import fullBody from '../../assets/fullbody.png';

const CardsList = () => {
	return (
		<div className='mt-12 flex flex-wrap justify-around'>
			<MainCard
				title='Try new workout'
				className='h-60 bg-magnolia mb-10'
				flex='flex'
				width='w-2/3'
			>
				<img src={fullBody} alt='fullBody' className='h-full p-2' />
				<div className='flex flex-col justify-around'>
					<h2 className='text-2xl font-extrabold'>Full body</h2>
					<p className='text-base'>
						Full body workouts are one of the best workout splits for muscle
						growth and strength regardless of your training experience. They not
						only enable you to optimize your training frequency and recovery but
						are also time efficient
					</p>
					<Button variant='contained' color='success'>
						Try It
					</Button>
				</div>
			</MainCard>
			<MainCard title='Time this week' className='bg-lightGreen w-56 h-44'>
				<span className='text-lg font-bold'>27 Hours ⌛</span>
			</MainCard>
			<MainCard
				title='Workouts done this week💪'
				className='w-64 h-28 bg-uraniumBlue'
			>
				<span className='text-lg font-bold'>0</span>
				<span className='text-lg font-bold'>This week</span>
			</MainCard>
			<MainCard title='Todays workout' className='bg-spanish h-28 w-96'>
				<span className='text-lg font-bold mb-3'>Chest + triceps</span>
				<Button variant='contained' color='success'>
					Start workout
				</Button>
			</MainCard>
			<MainCard title='Water balance' className='bg-uraniumBlue h-28 w-72'>
				<span className='text-lg font-bold mb-3'>6/8 glasses 💧</span>
				<Button variant='contained'>Add glass</Button>
			</MainCard>
		</div>
	);
};

export default CardsList;
