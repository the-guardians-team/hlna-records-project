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
        {/* the form must be always on the top of the page 'All pages', BUT on submit it should direct to 'Search Results Page' */}
        <div className="card">
        {/* rendered in this page 'Home Page' */}
          <h1>Top Tracks</h1>
          {/* 
          when you click on a track it directs you to the 'Track Page'
           */}
          <TopTracks />
          <h1>Top Albums</h1>
          {/* 
          when you click on an album it directs you to the 'Album Page'
           */}
          <TopAlbums />
        </div>
      </div>
    );
      
  }
  
}

export default App;
