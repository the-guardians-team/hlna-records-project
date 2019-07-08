import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import axios from 'axios';
class Album extends Component {
  state = {
    albums: [],
    goToArt:""
}

linkTo = () => {
  this.setState ({ goToArt:this.albums.strArtist})
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

componentDidMount() {
    axios.get(`http://theaudiodb.com/api/v1/json/1/mostloved.php?format=album`)
      .then(res => {
         const albums = res.data.loved
        console.log(res)
        // console.log(res)
       this.setState({ albums:albums });
      })
  }

  render() {
    
    return (
      <div> 
      {/* <div><a onClick={this.linkTo} style={{cursor: 'pointer'}}> <Link to="/App">Art</Link></a></div> */}
      
      {this.state.albums.map(loved => <div> <p>{loved.strAlbum}</p> <img style={{width: '150px', height: '150px'}} src={loved.strAlbumThumb} /> </div>)}
         
         </div>
    )
  }
}
export default Album 
