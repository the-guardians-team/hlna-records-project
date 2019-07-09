import React,{Component} from 'react'
import axios from 'axios'
// import Track from './Track'
import {Link} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
// import { Route } from "react-router-dom";

class TopTracks extends Component{
    state = {
        top50Tracks:[],
      }
      componentWillMount() {
        // API calls
        axios({
          method: 'get',
          url: `https://www.theaudiodb.com/api/v1/json/1/mostloved.php?format=track`
        })
        .then(response => {
          // console.log(response)
          const allTrack = response.data.loved
          this.setState({
            top50Tracks: allTrack
          })
        })
      }
    render(){
        return (
          <div className="container">
          <div className="row">

            {this.state.top50Tracks.map(track => (
              <div className="card col-4">
                <Link to={`/track/${track.strMusicBrainzID}`}>
                  <img
                    src={track.strTrackThumb}
                    className="card-img-top"
                    alt=""
                  />
                </Link>
              </div>
            ))}
            </div>
          </div>
        );
        
    }
}

export default TopTracks;