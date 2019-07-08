import React, { Component } from "react";
import "./App.css";
import SearchByTitle from './SearchByTitle'
// import axios from 'axios'
import TopAlbums from './TopAlbums'
// import components
import Artist from './Artist'
import TopTrack from './TopTrack'

class App extends Component {
  // state ={ key:json file, key:json file, ...}

  render() {
    return (
      <div className="App">
         <SearchByTitle />
         <TopTrack />
        <TopAlbums />
        {/* <SlideShow />
        <Track /> */}
        <div className="card">
          {/* {this.state.artist.map((artist, index) =>(
             <Artist
               artist={artist}
               key={index}
             />
           )
      )} */}
        </div>
        {/* <SearchByTitle /> */}
        {/* <SlideShow /> */}
        
        {/* artist component will contain <Album /> , and album componenet will contain <Track /> */}
      </div>
    );
      
  }
  
}

export default App;
