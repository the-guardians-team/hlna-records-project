import React, {Component} from 'react'
import axios from 'axios'
// import Album from './Album'
import { Link } from "react-router-dom";
import './styles.css'

// import css

class Artist extends Component {
  state = {
    artist: {},
    artistName: "", // taken from search form
    albums: [] 
  };
  componentWillMount() {
    axios({
      method: "get",
      url: `https://www.theaudiodb.com/api/v1/json/195187/search.php?s=${
        this.props.match.params.name}`
      //
    })
      .then(response => {
        console.log(response);
        const artist = response.data.artists[0];
        this.setState({ artist });
        //   const artistName = this.props.artist.strArtist.replace(/\s/g, "");
        //   this.setState({ artistName });

        this.getArtistAlbums();
      })
      .catch(error => {});
  }
 
  getArtistAlbums =()=>{
      axios({
        method: "get",
        url: `https://theaudiodb.com/api/v1/json/195187/searchalbum.php?s=${
          this.state.artist.strArtist
        }`
      })
        .then(response => {
          // console.log(response);
          const albums = response.data.album;
          // console.log(response.data.album);
          
          console.log(albums);
          this.setState({ albums });
        })
        .catch(error => {
          console.log("error ########## albums");
          console.log(error);
        });
  }

  render() {
             return (
               <div className="Artist">
                
                 <img
                   className="banner"
                   src={this.state.artist.strArtistBanner}
                   alt="no img"
                 />
                 <br/>
                 <Link to="/"><button type="button" className="btn btn-dark btn-lg btn-block home">
                   Home
                 </button></Link>
                 <div className="info">
                 <div className="Card">
                   <img
                     className="thumb cardImg"
                     src={this.state.artist.strArtistThumb}
                     alt="no img"
                     
                   />
                   <div id='bio'>
                   <h1>
                     {this.state.artist.strArtist}
                   </h1>
                   <h2>Genre</h2>
                   <p>
                     {this.state.artist.strGenre}
                   </p>
                   <h2>Biography</h2>
                   <p>
                     {this.state.artist.strBiographyEN}
                   </p>
                   <h2>Country</h2>
                   <p>
                     {this.state.artist.strCountry}
                   </p>
                   <h2>
                   <a id='web' href={this.state.artist.strWebsite}>
                    Website
                   </a></h2>
                   </div>
                   
                   </div>
                   <br/><br/><br/>
                   {/* <Albums artistName={this.state.artist.name} /> */}
                   <h2 className='Title'>Albums</h2>
                   <br/><br/>
                   <div className="bd-example">
                   
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
         
          <div className="carousel-inner album">
          {this.state.albums.map((album, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <Link to={`/album/${album.idAlbum}`}>
            {album.strAlbumThumb != null ? (<div>
          <img src={album.strAlbumThumb}   width="700px" height="700px"/>{album.strAlbumThumb.length ? '':<div class="centered">{album.strAlbum}</div>}</div>): (
                      <div class="container">
                        <img
                          src="http://citasantehnika.lv/content/images/default-image.gif"
                          className="d-block w-100 image"
                          alt="IMG" width="700px" height="700px"
                        />
                        <div class="centered">{album.strAlbum}</div>
                      </div>
                    )}
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
      </div>
                   {/* <Album key={album.idAlbum} albumId={album.idAlbum}/> */}

                   {/* <img
                   src={this.state.artist.strArtistLogo}
                   alt="no img"
                 />

                 <img
                   src={this.state.artist.strArtistClearart}
                   alt="no img"
                 />
                 <img
                   src={this.state.artist.strArtistWideThumb}
                   alt="no img"
                 />
                 <img
                   src={this.state.artist.strArtistFanart}
                   alt="no img"
                 />
                 <img
                   src={this.state.artist.strArtistFanart2}
                   alt="no img"
                 />
                 <img
                   src={this.state.artist.strArtistFanart3}
                   alt="no img"
                 /> */}
                 </div>
               </div>
             );
           }
}
export default Artist;

//  componentDidMount() {
    // axios({
    //     method: 'get',
    //     url: `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${this.state.name}`
    // })
    // .then(response =>{
    //                    console.log(response.data.artists[0].strArtistThumb);
    //                    const image =
    //                      response.data.artists[0]
    //                        .strArtistThumb;
    //                    this.setState({ image });
    //                  })
    // .catch(error=>{
    //     console.log("########## error run")
    // })
//   }

  // getArtist =()=> {
       

  //   if (!this.state.artistName){
  //     console.log("no result")
  //   } else {
  //   axios({
  //     method: "get",
  //     url: `https://www.theaudiodb.com/api/v1/json/195187/search.php?s=${this.state.artistName}`
  //     //
  //   })
  //     .then(response => {
        
  //                         console.log(response);
  //                         const artist =
  //                           response.data.artists[0];
  //                         this.setState({ artist });
                        
  //                       })
  //     .catch(error => {});
  //                     }
  // }



  