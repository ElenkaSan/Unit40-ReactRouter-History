import React from "react";
import "./Soda.css";
import { Link } from 'react-router-dom';

function Soda() {
  return (
    <div className="Soda">
      <h1>Soda is coming soon...</h1>
      <p><img
        src="https://66.media.tumblr.com/21f46acf25fb337ce0a52483cab5fefa/306a0577ca8cffee-4b/s400x600/2b18bd429884cc0e8f255214585a5a7da84ac84c.gif"
        alt="Soda is coming soon"
      /></p>
      <Link className="Soda-link" to="/coke">
				Soda is here...
			</Link>
    </div>
  );
}

export default Soda;
