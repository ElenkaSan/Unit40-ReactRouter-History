import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './ColorDetails.css';

function ColorDetails({ colors }) {
	const { color } = useParams();
	const chooseColor = colors.find((c) => c.name === color);
	if (chooseColor) {
		return (
			<div className='ColorDetails'> 
				<h1 style={{ backgroundColor: chooseColor.color, height: '100vh'}}> This {chooseColor.name} is a lovely color!
				<Link className='ColorDetails-link' to='/colors'>
		        	Go Back
		        </Link></h1>
			</div>
		);
	};
	return <Redirect to='/colors' />;
};

export default ColorDetails;