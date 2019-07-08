import React, { Component } from "react";
import "./App.css";
// import components
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
        {/* <SearchByTitle /> */}
        {/* <SlideShow /> */}
        {this.state.top50Tracks.map(loved => <TopTrack key={loved.idTrack} 
        tId={loved.idTrack} arId={loved.idArtist} alId={loved.idAlbum} 
        tName={loved.strTrack} arName={loved.strArtist} alName={loved.strAlbum} 
        arImg={loved.strTrackThumb} tVid={loved.strMusicVid} />)}
        {/* <Artist /> */}
        {/* artist component will contain <Album /> , and album componenet will contain <Track /> */}
      </div>
    );
  }
}

export default App;
