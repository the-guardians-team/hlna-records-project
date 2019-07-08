import React, { Component } from "react";
import "./App.css";
// import axios from 'axios'
// import components
import Artist from './Artist'

class App extends Component {
 
  render() {
    //  console.log(this.state.artist)
    return (
      <div className="App">
        <Artist />
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