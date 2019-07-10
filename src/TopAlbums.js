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
      <div className="bd-example">
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
         
          <div className="carousel-inner album">
          {this.state.albums.map((album, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
          <Link to={`/album/${album.idAlbum}`}>
              <img src={album.strAlbumThumb} className="d-block w-95" alt="" />
            </Link>
         
            </div>
            
          ))}

            {/* <div class="carousel-item active">
              <img src="..." class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </div>
            </div> */}
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
      </div>
    )
 { //     <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
  // <div className="carousel-inner">

  //       {this.state.albums.map(album => (
  //         <div className="carousel-item active">
  //         <Link to={`/album/${album.idAlbum}`}>
  //           <img src={album.strAlbumThumb} className="d-block w-80" alt="" />
  //         </Link>
  //         </div>
          
  //       ))}
  //     </div>
  //     <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
  //   <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  //   <span className="sr-only">Previous</span>
  // </a>
  // <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
  //   <span className="carousel-control-next-icon" aria-hidden="true"></span>
  //   <span className="sr-only">Next</span>
  // </a>
  //     </div>
    }
  }
}



export default TopAlbums 
{/* <Album key={album.idAlbum} albumId={album.idAlbum} /> */}