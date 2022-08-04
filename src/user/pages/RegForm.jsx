import React from 'react';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '@mui/material';

const RegForm = () => {
	return (
		<div className='flex items-center justify-center h-full'>
			<Formik
				initialValues={{ email: '', password: '' }}
				validationSchema={Yup.object({
					email: Yup.string()
						.email('Invalid email address')
						.required('Required'),
					username: Yup.string()
						.min(3, 'Must be minimum 3 characters')
						.required('Required'),
					password: Yup.string()
						.min(8, 'Must be minimum 8 characters')
						.required('Required'),
				})}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}
			>
				<Form className='flex flex-col items-center justify-around rounded-xl bg-white w-96 h-96'>
					<h1 className='font-bold text-3xl'>SignUp</h1>
					<h2>Please signup, to use this site</h2>
					<div className='flex flex-col '>
						<Field
							name='email'
							type='email'
							placeholder='Email Address'
							className='w-56 h-10 p-2 text-lg '
						/>
						<ErrorMessage
							name='email'
							component='span'
							className='text-rose-700'
						/>
					</div>
					<div className='flex flex-col'>
						<Field
							name='username'
							type='text'
							placeholder='Username'
							className='w-56 h-10 p-2 text-lg  focus:outline-none'
						/>
						<ErrorMessage
							name='username'
							component='span'
							className='text-rose-700'
						/>
					</div>
					<div className='flex flex-col'>
						<Field
							name='password'
							type='password'
							placeholder='Password'
							className='w-56 h-10 p-2 text-lg  focus:outline-none'
						/>
						<ErrorMessage
							name='password'
							component='span'
							className='text-rose-700'
						/>
					</div>

					<Button
						variant='contained'
						color='success'
						type='submit'
						className='w-56'
					>
						Login
					</Button>
					<NavLink to='/reg' className='underline hover:text-keppel'>
						Alredy have an account? Login
					</NavLink>
				</Form>
			</Formik>
		</div>
	);
};

export default RegForm;
