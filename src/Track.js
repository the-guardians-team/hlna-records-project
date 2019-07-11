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
          if(response.data.track != null){
          this.setState({
              track: response.data.track[0]}) 
          }
           
      })
  }
  render() {
    console.log(!this.state.track)
    if (this.state.track){
    return (
             
      <div className='singleTracks'>

        <Link to="/"><button type="button" className="btn btn-dark btn-lg btn-block home">
                   Home
                 </button></Link>

        
      
        <p class='card-title'>{this.state.track.strTrack}</p> 
        <Link to={`/artist/${this.state.track.strArtist}`}>
          <h5 class='card-title' id='art'>{this.state.track.strArtist}</h5>
        </Link>
        
        {this.state.track.strTrackThumb ? <img src={this.state.track.strTrackThumb} alt="" /> : <img src={this.props.location.state.image} alt="" /> }
             
     </div>
    )} else {
      return (<div className="notfound">not found</div>)
    }
  }
}
export default Track;