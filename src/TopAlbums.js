import React, { Component } from "react";
import axios from 'axios';
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
     this.setState({ albums:albums });
    })
  }
  render() {
    return (
      
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
         
          <div className="carousel-inner album">
          {this.state.albums.map((album, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
          <Link to={`/album/${album.idAlbum}`}>
              <img src={album.strAlbumThumb} className="d-block w-100 image" alt="NO IMG" />
            </Link>
         
            </div>
            
          ))}

          </div>
          <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      
    )
 
    }
  }


export default TopAlbums 