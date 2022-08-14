import React from 'react';
import { NavLink } from 'react-router-dom';

import ProgramItem from '../components/ProgramItem';

const DUMMY_EXERCISES = [
	{
		id: 'e1',
		name: 'Incline Bench Press',
		description:
			'Set up your bench at an angle of around 30-45°. Lie back and place your hands on the bar, slightly wider than shoulder-width apart, with your palms facing up. Lift the bar out of the rack and press it up until your arms are extended and your hands are above your shoulders. Slowly lower the bar to your chest, then press it back up again.',
	},
	{
		id: 'e2',
		name: 'Incline Dumbbell Flyes',
		description:
			'To target the muscle slightly differently, the two start off doing 7-8 reps at a 45 degree incline angle. After one of them has hit his reps, the other (spotter) lowers the incline to about a 30 degree angle for the remaining 7-8 repetitions.',
	},
	{
		id: 'e3',
		name: 'Incline Bench Press',
		description:
			'Set up your bench at an angle of around 30-45°. Lie back and place your hands on the bar, slightly wider than shoulder-width apart, with your palms facing up. Lift the bar out of the rack and press it up until your arms are extended and your hands are above your shoulders. Slowly lower the bar to your chest, then press it back up again.',
	},
	{
		id: 'e4',
		name: 'Incline Dumbbell Flyes',
		description:
			'To target the muscle slightly differently, the two start off doing 7-8 reps at a 45 degree incline angle. After one of them has hit his reps, the other (spotter) lowers the incline to about a 30 degree angle for the remaining 7-8 repetitions.',
	},
	{
		id: 'e5',
		name: 'Incline Bench Press',
		description:
			'Set up your bench at an angle of around 30-45°. Lie back and place your hands on the bar, slightly wider than shoulder-width apart, with your palms facing up. Lift the bar out of the rack and press it up until your arms are extended and your hands are above your shoulders. Slowly lower the bar to your chest, then press it back up again.',
	},
	{
		id: 'e6',
		name: 'Incline Dumbbell Flyes',
		description:
			'To target the muscle slightly differently, the two start off doing 7-8 reps at a 45 degree incline angle. After one of them has hit his reps, the other (spotter) lowers the incline to about a 30 degree angle for the remaining 7-8 repetitions.',
	},
];

const UserPrograms = () => {
	return (
		<main className='pt-24 w-full'>
			<div className='ml-14'>
				<h2 className='font-bold text-2xl'>Your programs</h2>
				<div className='mt-2'>
					<NavLink to='/program/create' className='underline mr-3'>
						Create program
					</NavLink>
					<NavLink to='/workouts' className='underline mr-3'>
						Check ready workouts
					</NavLink>
				</div>
			</div>
			<div className=' flex flex-wrap justify-between'>
				<ProgramItem emoji='🏋️' programName='Chest + Triceps' />
				<ProgramItem emoji='🏋️' programName='Chest + Triceps' />
				<ProgramItem emoji='🏋️' programName='Chest + Triceps' />
				<ProgramItem emoji='🏋️' programName='Chest + Triceps' />
				<ProgramItem emoji='🏋️' programName='Chest + Triceps' />
			</div>
		</main>
	);
};

export default UserPrograms;
