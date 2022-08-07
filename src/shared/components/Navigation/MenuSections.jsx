import React from 'react';

import { FaUserCircle } from 'react-icons/fa';
import { FaDumbbell } from 'react-icons/fa';
import { GiProgression, GiMeal } from 'react-icons/gi';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { BsCalendarDate } from 'react-icons/bs';

import LinksLisk from './LinksLisk';
import MenuLink from './MenuLink';

const MenuSections = () => {
	return (
		<>
			<LinksLisk section='Trainings'>
				<li className='mb-1 flex justify-start'>
					<MenuLink
						to='/programs'
						linkName='Programs'
						className='py-2 px-4 rounded-md'
					>
						<AiOutlineAppstoreAdd className='w-5 h-5' />
					</MenuLink>
				</li>
				<li className='mb-1'>
					<MenuLink to='/workouts' linkName='Workouts'>
						<FaDumbbell className='w-6 h-6' />
					</MenuLink>
				</li>
			</LinksLisk>
			<LinksLisk section='Organization'>
				<li className='mb-1'>
					<MenuLink to='/schedule' linkName='Schedule'>
						<BsCalendarDate className='w-6 h-6' />
					</MenuLink>
				</li>
				<li className='mb-1'>
					<MenuLink to='/meals' linkName='My meals'>
						<GiMeal className='w-6 h-6' />
					</MenuLink>
				</li>
			</LinksLisk>
			<LinksLisk section='User'>
				<li className='mb-1'>
					<MenuLink to='/profile' linkName='Profile'>
						<FaUserCircle className='w-6 h-6' />
					</MenuLink>
				</li>
				<li className='mb-1'>
					<MenuLink to='/results' linkName='Results'>
						<GiProgression className='w-6 h-6' />
					</MenuLink>
				</li>
			</LinksLisk>
		</>
	);
};

export default MenuSections;
