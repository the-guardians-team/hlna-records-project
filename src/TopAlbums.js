import React, { Component } from "react";
// import { Route, Link } from "react-router-dom";
import axios from 'axios';
import "./App.css";
// import Album from './Album'
import { Link } from "react-router-dom";


class TopAlbums extends Component {
  
  state = {
    albums: []
}


  componentWillMount() {
    // API calls

    axios.get(`http://theaudiodb.com/api/v1/json/1/mostloved.php?format=album`)
    .then(res => {
       const albums = res.data.loved
      // console.log(res)
     this.setState({ albums:albums });
    })
  }
  render() {
    //  console.log(this.state.artist)
    return (
      <div className="AlbumImages">
        {/* 
          DONE
        */}
        {this.state.albums.map(album => (
          <Link to={`/album/${album.idAlbum}`}>
            <img src={album.strAlbumThumb} alt="" />
          </Link>
          // <Album key={album.idAlbum} albumId={album.idAlbum} />
        ))}
      </div>
    );
  }
}



export default TopAlbums 
