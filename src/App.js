import React, { Component } from "react";
import "./App.css";

// import components
import Search from './Search'
import TopAlbums from './TopAlbums'
import TopTracks from './TopTracks'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Search />
        {/* <SlideShow /> */}
        <div className="card">
          <h1>Top Tracks</h1>
          <TopTracks />
          <h1>Top Albums</h1>
          <TopAlbums />
        </div>
      </div>
    );
      
  }
  
}

export default App;
