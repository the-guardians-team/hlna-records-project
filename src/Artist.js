import React, {Component} from 'react'
import axios from 'axios'
import Album from './Album'
// import css

class Artist extends Component {
  state = {
    artist: {},
    artistName: "", // taken from search form
    albums: [] 
  };
  componentDidMount() {
    axios({
      method: "get",
      url: `https://www.theaudiodb.com/api/v1/json/195187/search.php?s=${this.props.artistName}`
      //
    })
      .then(response => {
          console.log(response);
          const artist =
            response.data.artists[0];
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
          console.log(response);
          const albums = response.data.album;
          console.log(response.data.album);
          
          console.log(albums);
          this.setState({ albums });
        })
        .catch(error => {
          console.log("error ########## albums");
          console.log(error);
        });
  }

  render() {
    //   if (!this.state.artist){ // wait a respected time before rendering if it is in state, if it's in props no need
    //       return <h2>no result</h2>;
    //   }
    
    // const name = this.props.artistName.replace(/\s/g, "");

    // this.setState({ artistName : name });
    // console.log(this.props.artistName)
    // console.log(this.state.artistName)
    // this.getArtist()
            // console.log(this.state.artist.strArtistLogo);
             return (
               <div className="Artist">
                 <img
                   className="banner"
                   src={this.state.artist.strArtistBanner}
                   alt="no img"
                 />

                 <div className="info">
                   <img
                     className="thumb"
                     src={this.state.artist.strArtistThumb}
                     alt="no img"
                   />
                   <p>
                     Artist name :{this.state.artist.strArtist}
                   </p>
                   <p>
                     Artist genre :{this.state.artist.strGenre}
                   </p>
                   <p>
                     Artist Biography :
                     {this.state.artist.strBiographyEN}
                   </p>
                   <p>
                     Artist Country :{this.state.artist.strCountry}
                   </p>
                   <a href={this.state.artist.strWebsite}>
                     Artist Website
                   </a>
                   
                {/* <Albums artistName={this.state.artist.name} /> */}
                   
                    {this.state.albums.map(album => <Album key={album.idAlbum} albumId={album.idAlbum}/>)}

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