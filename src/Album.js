import React, { Component } from "react";
import axios from "axios";
import Track from './Track'
import {Link} from "react-router-dom";


/////////////////////////////
// use this component in top albums , pass down album id as props
////////////////////////////
class Album extends Component {
    state={
        album: {},
        tracks: []
    }
    componentWillMount(){
        // album id is passed as props
        //api call to get an album using album id
        axios({
          method: "get",
          url: `https://theaudiodb.com/api/v1/json/195187/album.php?m=${
            this.props.match.params.id}`
        })
          // save album info in state
          .then(response => {
            console.log(response)
            const album = response.data.album[0];
            this.setState({ album });

        this.getAlbumTracks();


          })
          .catch(error => {console.log("Album error #############")});
                       
    }
getAlbumTracks =()=>{
      axios({
        method: "get",
        url: `https://theaudiodb.com/api/v1/json/195187/track.php?m=2147383&m=${
          this.state.album.idAlbum
        }`
        // https://theaudiodb.com/api/v1/json/195187/track.php?m=2147383&m=2147383
      })
        .then(response => {
          console.log(response);
          const tracks = response.data.track;
          console.log(response.data.track);
          
          console.log(tracks);
          this.setState({ tracks });
        })
        .catch(error => {
          console.log("error ########## tracks");
          console.log(error);
        });
  }
    render(){
        // use state to view album info
        return (
          <div>
            <Link to="/"><button type="button" className="btn btn-dark btn-lg btn-block home">
                   Home
                 </button></Link>
            <p>Album Name: {this.state.album.strAlbum}</p>
            {/* <p>artist name: {this.state.album.strArtist}</p> */}
            {/* 
            DONE 
             */}
            <Link to={`/artist/${this.state.album.strArtist}`}>
              <p>Artist Name: {this.state.album.strArtist}</p>
            </Link>
            <img src={this.state.album.strAlbumThumb} alt="" />

            <p>Albums' Tracks</p>
            {this.state.tracks.map(track => (

              <Link to={{

                pathname: `/track/${track.strMusicBrainzID}`,
                state: {
                  image: this.state.album.strAlbumThumb
                }
              }}> 
                <p>{track.strTrack}</p>
                

              </Link>
            ))}
          </div>

            
    
         
          

        );
            }
            
}

export default Album;