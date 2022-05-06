// import { render } from "express/lib/response";
import React from "react";
import JokeList from "./JokeList";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <JokeList />
      </div>
    );
  }
}

export default App;
