import React, { Component } from "react";
import "./App.css";
import SearchByTitle from './SearchByTitle'
// import components
import Artist from './Artist'

class App extends Component {
 
  render() {
    //  console.log(this.state.artist)
    return (
      <div className="App">
         <SearchByTitle />
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
