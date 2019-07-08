import React, { Component } from "react";
import "./App.css";
import SearchByTitle from './SearchByTitle'
// import components
import Artist from './Artist'


 
import TopTrack from './TopTrack'
import axios from "axios";

class App extends Component {
  // state ={ key:json file, key:json file, ...}
  
  render() {
    //  console.log(this.state.artist)
    return (
      <div className="App">
         <SearchByTitle />
         <TopTrack />
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

      </div>
    );
  }
}

export default App;
