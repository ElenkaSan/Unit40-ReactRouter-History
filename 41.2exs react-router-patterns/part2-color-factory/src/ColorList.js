import React from 'react';
import { Link } from 'react-router-dom';
import './ColorList.css';

function ColorList({colors}) {
  return (
		<div>
			<div className='ColorList'>
				<h1 className='ColorList-h'>Welcome to the color factory.</h1>
				<hy3>
					<Link to="/colors/new">Add a color</Link>{' '}
				</hy3>
			</div>
			<div>
				<h2>Please select a color.</h2>
				{colors.map((color) => (
					<h3 className='CL'>
						<Link to={`/colors/${color.name}`}>Hey! Here is {color.name}.</Link>
					</h3>
				))}
			</div>
		</div>
	);
};

export default ColorList;