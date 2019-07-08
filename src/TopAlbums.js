import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from 'axios';
import "./App.css";

class TopAlbums extends Component {
  
  state = {
    albums: []
}


  componentDidMount() {
    // API calls

    axios.get(`http://theaudiodb.com/api/v1/json/1/mostloved.php?format=album`)
    .then(res => {
       const albums = res.data.loved
      console.log(res)
      // console.log(res)
     this.setState({ albums:albums });
    })
  }
  render() {
    //  console.log(this.state.artist)
    return (
      <div className="App">
        
        {this.state.albums.map(loved => <h5>{loved.strAlbum} key={loved.idAlbum} </h5>)}
       
      </div>
    );
  }


// render() {

  
//   return (
//     <div> 
//       <p>{this.props.loved.strAlbum}</p>
//       <img style={{width: '150px', height: '150px'}} src={this.props.loved.strAlbumThumb} />
       
//        </div>
//   )
}

// componentDidMount() {
//       axios.get('https://cors-anywhere.herokuapp.com/https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=cher&api_key=fa6d7c53999a32c59ed71bb3d371ea07&format=json')
//         .then(res => {
//            const albums = res.data.topalbums.album
//           console.log(res)
//            // console.log(res)
//           this.setState({ albums:albums });
//          })
//      }

export default TopAlbums 
