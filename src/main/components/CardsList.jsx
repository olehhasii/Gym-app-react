import React from 'react';
import { Button } from '@mui/material';

import MainCard from '../components/MainCard';
import fullBody from '../../assets/fullbody.png';

const CardsList = () => {
	return (
		<div className='mt-12 flex flex-wrap justify-around'>
			<MainCard className=' h-72 bg-magnolia mb-10' flex='flex' width='w-2/3'>
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
			<MainCard title='Todays workout' className='bg-spanish h-72 w-96'>
				<h2 className='text-xl font-bold mb-3'>Todays workout</h2>
				<span className='text-lg font-bold mb-3'>Chest + triceps</span>
				<Button variant='contained' color='success'>
					Start workout
				</Button>
			</MainCard>
			<MainCard
				width='w-1/4'
				className='bg-lightGreen h-44'
				flex='flex items-center justify-center'
			>
				<div className='mr-6 text-4xl bg-white w-14 h-16 flex items-center justify-center rounded-2xl'>
					⌛
				</div>
				<div>
					<span className='text-lg font-bold'>27h</span>
					<h2 className='text-gray-600'>Time this week</h2>
				</div>
			</MainCard>
			<MainCard
				width='w-1/4'
				className='h-44 bg-uraniumBlue '
				flex='flex items-center justify-center'
			>
				<div className='mr-6 text-4xl bg-white w-14 h-16 flex items-center justify-center rounded-2xl'>
					💪
				</div>
				<div>
					<span className='text-lg font-bold'>0</span>
					<h2 className='text-gray-600'>Workouts this week</h2>
				</div>
			</MainCard>

			<MainCard
				width='w-1/4'
				className='bg-uraniumBlue h-44 '
				flex='flex items-center justify-center'
			>
				<div className='mr-6 text-4xl bg-white w-14 h-16 flex items-center justify-center rounded-2xl'>
					💧
				</div>
				<div>
					<span className='text-lg font-bold block mb-2'>6/8 glasses</span>
					<Button variant='contained'>Add glass</Button>
				</div>
			</MainCard>
		</div>
	);
};

export default CardsList;
