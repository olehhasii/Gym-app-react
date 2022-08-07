import React from 'react';

const LinksLisk = (props) => {
	return (
		<ul className='mt-3 w-full px-4 border-t border-gray-700 '>
			<li className='font-bold flex justify-start px-4 text-s text-slate-700'>
				{props.section}
			</li>
			{props.children}
		</ul>
	);
};

export default LinksLisk;
