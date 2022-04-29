import React from "react";
import "./Sweet.css";
import { Link } from 'react-router-dom';

function Sweet() {
  return (
    <div className="Sweet">
      <h1>Chocolate</h1>
      <p> <img src="https://media2.giphy.com/media/Wrscj8qsDogR4QHx2j/giphy.gif"
        alt="Chocolate"/></p>
      <p> NOM NOM NOM!</p>
      <Link className="Sweet-link" to="/">
				Go Back
      </Link>
    </div>
  );
}

export default Sweet;
