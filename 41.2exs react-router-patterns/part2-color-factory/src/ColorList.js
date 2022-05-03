import React from 'react';
import { Link } from 'react-router-dom';
import './ColorList.css';

function ColorList({colors, removeColor}) {
  return (
		<div>
			<div className='ColorList'>
				<h1 className='ColorList-h'>Welcome to the color factory.</h1>
				<h3>
					<Link to="/colors/new">Add a color</Link>{' '}
				</h3>
			</div>
			<div>
				<h2>Please select a color.</h2>
				{colors.map((color) => (
					<div id={color.id}>
					<h3 className='CL'>
						<Link to={`/colors/${color.name}`}>Hey! Here is {color.name}.</Link>
					</h3>
					<button className='CL-button' onClick={() =>removeColor({ id: color.id })}> X </button>
					</div>
				))}
			</div>
		</div>
	);
};

export default ColorList;
