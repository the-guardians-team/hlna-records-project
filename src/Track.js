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
        <Link to="/">Home</Link>

        {/* <h1>this is track page</h1> */}
      
        {/* <h1>this is track page</h1> */}
        {/* {this.props.match.params.id} */}
      
        

        <p>{this.state.track.strTrack}</p>
        
        {this.state.track.strTrackThumb ? <img src={this.state.track.strTrackThumb} alt="" /> : <img src={this.props.location.state.image} alt="" /> }
        <Link to={`/artist/${this.state.track.strArtist}`}>
          <p>{this.state.track.strArtist}</p>
        </Link>
        
     
     </div>
    )} else {
      return (<p>not found</p>)
    }
  }
}
export default Track;