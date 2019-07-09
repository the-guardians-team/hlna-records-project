import React,{Component} from 'react'
import axios from 'axios'
// import Track from './Track'
import {Link} from 'react-router-dom'
// import { Route } from "react-router-dom";

class TopTracks extends Component{
    state = {
        top50Tracks:[],
      }
      componentDidMount() {
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
          <div>
            {/* 
          DONE
           */}

            {this.state.top50Tracks.map(track => (
              <div>
                <Link to={`/track/${track.strMusicBrainzID}`}>
                  <img src={track.strTrackThumb} alt="" />
                </Link>
                {/* <Track
                  key={track.strMusicBrainzID}
                  tId={track.strMusicBrainzID}
                /> */}
              </div>
            ))}
          </div>
        );
        
    }
}

export default TopTracks;