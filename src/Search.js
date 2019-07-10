import React, { Component } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

class Search extends Component {

  state = {
    tracks: [],
    formData: {
      title: '',
      artist:''
    }
  }

  handleChange = event => {
    //get the user's input
    const userInput = event.target.value;
    //get which input they typed in
    const name = event.target.name;
    //copy the state of formData
    const newFormData = Object.assign(this.state.formData);
    //update the key in formData copy with the new value
    newFormData[name] = userInput;
    //set the state with the updated formData
    this.setState({
      formData: newFormData
    });
  };

  handleSubmitArtist = event => {
    // this.setState({event: this.state.formData.artist})
    //prevent default action
    event.preventDefault()
    const artist = this.state.formData.artist
    this.setState({
      artistSearch: artist
    });
  }

  handleSubmitTitle = event => {
    this.setState({event: this.state.formData.title})
      //prevent default action
      event.preventDefault();
  
  
    //get the formData
    const title = this.state.formData.title
    axios({
      method: "get", 
      url: `https://cors-anywhere.herokuapp.com/https://ws.audioscrobbler.com//2.0/?method=track.search&track=${title}&api_key=fa6d7c53999a32c59ed71bb3d371ea07&format=json`
  
       })
  
      .then(response =>{
        this.setState({
        tracks: response.data.results.trackmatches.track
        })
      })

      .catch()
  }

  render() {
    return (
      <div className="Search">
        <ul>
          {this.state.tracks.map((track, index) => (
            <li key={index}>
              <Link to={`/track/${track.mbid}`}>
                {track.name}: {track.artist}
              </Link>
            </li>
          ))}
        </ul>

        {this.state.artistSearch ? (
          <Link to={`/artist/${this.state.artistSearch}`}>
            {this.state.artistSearch}
          </Link>
        ) : (
          // <Artist
          //   key={this.state.artistSearch}
          //   artistName={this.state.artistSearch}
          // />
          ""
        )}

        <form onSubmit={this.handleSubmitTitle}>
        <label for="Search Tracks"><br /></label>
          <input class='box'
        
            placeholder="Search Tracks"
            name="title"
            value={this.state.formData.title}
            onChange={this.handleChange}
          />
        </form>
        <form onSubmit={this.handleSubmitArtist}>
        <label for="Search Tracks"><br /></label>
          <input class='box'
            placeholder="Find Artist"
            name="artist"
            value={this.state.formData.artist}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}


export default Search;
