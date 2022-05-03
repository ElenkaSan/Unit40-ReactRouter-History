import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar({dogs}) {
  return (
    <nav className='NavBar'>
      <NavLink exact to='/dogs'>
        Home
      </NavLink>
      {dogs.map((dog) => (
				<NavLink key={dog.src} exact to={`/dogs/${dog.name.toLowerCase()}`}>
					{dog.name}
				</NavLink>
			))}
    </nav>
  );
};

export default NavBar;
