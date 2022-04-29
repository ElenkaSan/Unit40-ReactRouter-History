import React from "react";
import "./Soda.css";
import { Link } from 'react-router-dom';

function Coke() {
  return (
    <div className="Soda">
      <h1>Hooray</h1>
      <p><img
        src="https://c.tenor.com/zo6kBw49F_kAAAAC/soda-drink.gif"
        alt="Soda is coming soon"
      /></p>
      <Link className="Soda-link" to="/">
				Go Back
      </Link>
    </div>
  );
}

export default Coke;