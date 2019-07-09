import React,{Component} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";

class Track extends Component {
  state = {
    track: ""
  };
  componentWillMount(){
      axios({
          method: 'get',
          url:`https://theaudiodb.com/api/v1/json/195187/track-mb.php?i=${this.props.match.params.id}`
      })
      .then(response => {
          console.log(response)
          this.setState({
              track: response.data.track[0]})
      })
  }
  render() {
    return (
      <div className='singleTracks'>
        <Link to="/">Home</Link>

        <h1>this is track page</h1>
      
        {/* <h1>this is track page</h1> */}
        {/* {this.props.match.params.id} */}
        <p>{this.state.track.strTrack}</p>

        <img src={this.state.track.strTrackThumb} alt="" />

        <Link to={`/artist/${this.state.track.strArtist}`}>
          <p>artist name: {this.state.track.strArtist}</p>
        </Link>
      </div>
    );
  }
}
export default Track;