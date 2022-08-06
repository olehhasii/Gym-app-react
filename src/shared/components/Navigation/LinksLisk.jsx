import React from 'react';
import { FaDumbbell, FaUserCircle } from 'react-icons/fa';
import { GiProgression, GiMeal } from 'react-icons/gi';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { BsCalendarDate } from 'react-icons/bs';

import MenuLink from './MenuLink';

const LinksLisk = () => {
	return (
		<ul className='mt-3 w-full px-2 border-t border-gray-700 flex flex-col items-center'>
			<li className='mb-4'>
				<MenuLink to='/programs' linkName='Programs'>
					<AiOutlineAppstoreAdd className='w-6 h-6' />
				</MenuLink>
			</li>
			<li className='mb-4'>
				<MenuLink to='/workouts' linkName='Workouts'>
					<FaDumbbell className='w-6 h-6' />
				</MenuLink>
			</li>
			<li className='mb-4'>
				<MenuLink to='/schedule' linkName='Schedule'>
					<BsCalendarDate className='w-6 h-6' />
				</MenuLink>
			</li>
			<li className='mb-4 '>
				<MenuLink to='/meals' linkName='My meals'>
					<GiMeal className='w-6 h-6' />
				</MenuLink>
			</li>
			<li className='mb-4'>
				<MenuLink to='/profile' linkName='Profile'>
					<FaUserCircle className='w-6 h-6' />
				</MenuLink>
			</li>
			<li className='mb-4 '>
				<MenuLink to='/results' linkName='Results'>
					<GiProgression className='w-6 h-6' />
				</MenuLink>
			</li>
		</ul>
	);
};

export default LinksLisk;
