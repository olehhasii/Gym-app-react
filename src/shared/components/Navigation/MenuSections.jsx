import React from 'react';

import { FaUserCircle } from 'react-icons/fa';
import { FaDumbbell, FaCircle } from 'react-icons/fa';
import { GiProgression, GiMeal } from 'react-icons/gi';
import { BsCalendarDate } from 'react-icons/bs';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';

import LinksLisk from './LinksLisk';
import MenuLink from './MenuLink';
import AccordionMenu from './Accordion';

const MenuSections = () => {
	return (
		<>
			<LinksLisk section='Trainings'>
				<li className='mb-1 flex justify-start'>
					<AccordionMenu
						title='Programs'
						icon={<AiOutlineAppstoreAdd className='w-6 h-6' />}
					>
						<MenuLink
							to='/programs'
							linkName='My Programs'
							className='py-2 px-4 rounded-md'
						>
							<FaCircle className='w-3 h-3' />
						</MenuLink>
						<MenuLink
							to='/program/create'
							linkName='Create Program'
							className='py-2 px-4 rounded-md'
						>
							<FaCircle className='w-3 h-3' />
						</MenuLink>
					</AccordionMenu>
				</li>
				<li className='mb-1'>
					{/* <MenuLink to='/workouts' linkName='Workouts'>
						<FaDumbbell className='w-6 h-6' />
					</MenuLink> */}
					<AccordionMenu
						title='Workouts'
						icon={<FaDumbbell className='w-6 h-6' />}
					>
						<MenuLink
							to='/train'
							linkName='Start training'
							className='py-2 px-4 rounded-md'
						>
							<FaCircle className='w-3 h-3' />
						</MenuLink>
						<MenuLink
							to='/workouts'
							linkName='Ready workouts'
							className='py-2 px-4 rounded-md'
						>
							<FaCircle className='w-3 h-3' />
						</MenuLink>
					</AccordionMenu>
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
