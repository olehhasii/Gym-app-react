import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionMenu = (props) => {
	return (
		<Accordion
			sx={{
				boxShadow: 'none',
				width: '100%',
			}}
		>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				className=' hover:bg-gray-200 rounded-md'
				sx={{ borderRadius: '6px' }}
			>
				{props.icon}
				<p className='ml-2 text-sm'>{props.title}</p>
			</AccordionSummary>
			<AccordionDetails
				sx={{
					margin: 0,
					padding: 1,
					paddingTop: 0,
				}}
			>
				{props.children}
			</AccordionDetails>
		</Accordion>
	);
};

export default AccordionMenu;
