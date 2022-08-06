import { Button } from '@mui/material';
import React from 'react';

const ProgramItem = () => {
	return (
		<div className='bg-white rounded-xl shadow-top flex max-w-full m-5 overflow-hidden relative'>
			<div class='bg-keppeldark  max-w-64 p-6'>
				<h6 className='opacity-80 uppercase'>Program</h6>
				<h2 className='my-2 text-2xl font-bold'>Chest + Biceps</h2>
			</div>
			<div class='p-8 relative w-full'>
				<div>
					<ul className='flex flex-wrap'>
						<li className='mb-2 mr-2'>
							<span className='font-bold'>Incline Bench Press 4 x 12 |</span>
						</li>
						<li className='mb-2 mr-2'>
							<span className='font-bold'>Incline Bench Press 4 x 12 |</span>
						</li>
						<li className='mb-2 mr-2'>
							<span className='font-bold'>Incline Bench Press 4 x 12 |</span>
						</li>
						<li className='mb-2 mr-2'>
							<span className='font-bold'>Incline Bench Press 4 x 12 |</span>
						</li>
						<li className='mb-2 mr-2'>
							<span className='font-bold'>Incline Bench Press 4 x 12 |</span>
						</li>
						<li className='mb-2 mr-2'>
							<span className='font-bold'>Incline Bench Press 4 x 12 |</span>
						</li>
					</ul>
				</div>
			</div>
			<Button variant='contained' color='success' className='absolute w-24 '>
				Edit
			</Button>
			<Button variant='contained' color='error' className='absolute w-24 '>
				Delete
			</Button>
		</div>
	);
};

export default ProgramItem;
