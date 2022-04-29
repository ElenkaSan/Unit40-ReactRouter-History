import React from "react";
import "./Chips.css";
import { Link } from 'react-router-dom';

function Chips() {
  return (
    <div className="Chips">
      <p>Chocolate Chips!</p>
      <p> <img src="https://i.gifer.com/Chb3.gif"
        alt="Chips"/> </p>
      <Link className="Chips-link" to="/">
				Go Back
      </Link>
    </div>
  );
}

export default Chips;
