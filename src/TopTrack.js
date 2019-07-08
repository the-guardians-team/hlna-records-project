import React,{Component} from 'react'
import axios from 'axios'


class TopTrack extends Component{
    state = {
        top50Tracks:[]
      }
      componentDidMount() {
        // API calls
        axios({
          method: 'get',
          url: `https://www.theaudiodb.com/api/v1/json/1/mostloved.php?format=track`
        })
        .then(response => {
          const allTrack = response.data.loved
          this.setState({
            top50Tracks: allTrack
          })
        })
      }
    render(){
        return(
            <div>
                {this.state.top50Tracks.map(loved =>
                    <div>
                        <h1>{loved.strTrack}</h1>
                        <img src={loved.strTrackThumb}/>
                    </div>
                )}
                
            </div>
        )
    }
}

export default TopTrack;