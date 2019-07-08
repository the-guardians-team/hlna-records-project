import React, { Component } from "react";
import "./App.css";
// import axios from 'axios'
// import components
// import Artist from './Artist'


 
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
    //  console.log(this.state.artist)
    return (
      <div className="App">
        {/* <Artist /> */}
        {/* <SearchByTitle />
        <SlideShow />
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
        {this.state.top50Tracks.map(loved => <TopTrack key={loved.idTrack} 
        loved={loved}/>)}
        {/* artist component will contain <Album /> , and album componenet will contain <Track /> */}
      </div>
    );
  }
}

export default App;



        /////////////END /////
    // API calls
    // axios({
    //   method: "get",
    //   url:
    //     "https://cors-anywhere.herokuapp.com/http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=kuwait&api_key=36439381aa28fa5ef0af0232bb7a274f&format=json"
    // })
    //   .then(response => {
    //      console.log(response.data.topartists)
    //     // console.log(response.data.topartists.artist);
    //     const topartists = response.data.topartists.artist;
    //     let count = -1;
    //     const minTopArtists = topartists.filter(artist => {
    //       count++;
    //       return count < topartists.length / 2;
    //     });
    //     // console.log(minTopArtists);
    //     this.setState({ minTopArtists });
    //   })
    //   .catch(error => {});


    
// const callToken =()=> {
//   let parameters = {"client_id" : "ff441d52896a41bbb9b634baa3f80c03",// u get in developer account in Spotify.
//   "client_secret" : "a132da2b8cc84305b0b0ef95cebaa3c0",
//   "grant_type" : "client_credentials"}
//   axios.post("https://accounts.spotify.com/api/token", parameters)
//     .then(response =>{
//         console.log(response)
              
//     })
                          

//     }  