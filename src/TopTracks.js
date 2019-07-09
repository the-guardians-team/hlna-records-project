import React,{Component} from 'react'
import axios from 'axios'
import Track from './Track'

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
          console.log(response)
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
          when you click on a track it directs you to the 'Track Page'
           */}
            {this.state.top50Tracks.map(loved => (
              <Track
                key={loved.strMusicBrainzID}
                tId={loved.strMusicBrainzID}
              />
            ))}
          </div>
        );
        
    }
}

export default TopTracks;