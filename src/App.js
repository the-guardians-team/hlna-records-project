import React, { Component } from "react";
import "./App.css";
// import components

class App extends Component {
  // state ={ key:json file, key:json file, ...}
  componentDidMount() {
    // API calls
  }
  render() {
    return (
      <div className="App">
        <SearchByTitle />
        <SlideShow />
        <Track />
        <Artist />
        {/* artist component will contain <Album /> , and album componenet will contain <Track /> */}
      </div>
    );
  }
}

export default App;
