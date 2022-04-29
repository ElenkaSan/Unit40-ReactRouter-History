import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";

function VendingMachine() {
  return (
    <div>
        <div className="VendingMachine">
            <h2 className="VendingMachine-h"> Select your snack!</h2>
            <p><Link className="VendingMachine-a" to="/soda">Soda</Link></p>
            <p><Link className="VendingMachine-a" exact to="/chips">Chips</Link></p>
            <p><Link className="VendingMachine-a" to="/sweet">Sweet</Link></p>
            {/* <img src="https://thehustle.co/wp-content/uploads/2020/10/ezgif.com-optimize.gif" alt="machine"></img> */}
        </div >

    </div >
);
}

export default VendingMachine;
