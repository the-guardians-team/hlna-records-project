import React, { Component } from "react";
import axios from "axios";


/////////////////////////////
// use this component in top albums , pass down album id as props
////////////////////////////
class Album extends Component {
    state={
        album: {}
    }
    componentDidMount(){
        // album id is passed as props
        //api call to get an album using album id
        axios({
          method: "get",
          url: `https://theaudiodb.com/api/v1/json/195187/album.php?m=${this.props.albumId}`
        })
        // save album info in state
        .then(response=>{
            // console.log(response)
            const album = response.data.album[0];
            this.setState({album})
        })
        .catch(error=>{})
                       
    }

    render(){
        // use state to view album info
        return (
          <div>
            <p>album name: {this.state.album.strAlbum}</p>
            <p>artist name: {this.state.album.strArtist}</p>
            {/* 
            a link to the 'Artist Page' 
             */}
            <img src={this.state.album.strAlbumThumb} alt="" />
          </div>
        );
    }
}

export default Album;