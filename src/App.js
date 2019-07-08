import React, { Component } from "react";
import "./App.css";
import SearchByTitle from './SearchByTitle'
import axios from 'axios';
// import axios from 'axios'
import TopAlbums from './TopAlbums'
// import components
import Artist from './Artist'


 
import TopTrack from './TopTrack'
import axios from "axios";

class App extends Component {
  // state ={ key:json file, key:json file, ...}
  state = {
    top50Tracks:[]
  }
  componentDidMount() {
    // API calls
    axios({
      method: 'get',
      url: `https://www.theaudiodb.com/api/v1/json/1/mostloved.php?format=track`
    })
    .then(response => {
      console.log(response)
      const allTrack = response.data.loved
      this.setState({
        top50Tracks: allTrack
      })
    })
  }
  render() {
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
        {/* <SearchByTitle /> */}
        {/* <SlideShow /> */}
        
        {/* artist component will contain <Album /> , and album componenet will contain <Track /> */}
      </div>
    );
      <div>
        <TopAlbums />
      </div>
    )
  }
  
}

export default App;
