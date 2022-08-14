import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

import ItemCard from '../../shared/components/UI/ItemCard';

const ProgramItem = (props) => {
	return (
		<ItemCard
			width='w-1/4'
			className='h-44 bg-magnolia'
			flex='flex flex-col items-center justify-center m-6'
		>
			<div className='flex justify-between items-center'>
				<div className='mr-6 text-4xl bg-white w-14 h-16 flex items-center justify-center rounded-2xl'>
					{props.emoji}
				</div>
				<div>
					<span className='text-2xl font-bold'>{props.programName}</span>
				</div>
			</div>
			<div className='flex justify-around w-full mt-4'>
				<Button variant='contained'>
					<NavLink to='/program/edit' className='w-12'>
						View
					</NavLink>
				</Button>
				<Button variant='contained' color='success'>
					<NavLink to='/program/edit' className='w-12'>
						Edit
					</NavLink>
				</Button>
				<Button variant='contained' color='error'>
					<NavLink to='/program/edit' className='w-12'>
						Delete
					</NavLink>
				</Button>
			</div>
		</ItemCard>
	);
};

export default ProgramItem;
