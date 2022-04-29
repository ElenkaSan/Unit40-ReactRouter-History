import React from "react";

// import Home from "./Home";
import Sweet from "./Sweet";
import Soda from "./Soda";
import Chips from "./Chips";
import NavBar from "./NavBar";
import Coke from "./Coke"

import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/coke">
          <Coke />
        </Route>
        <Route exact path="/sweet">
          <Sweet />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
