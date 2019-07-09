import React,{Component} from 'react'
import axios from 'axios'

class Track extends Component {
    state={
        track:''
    }
    componentDidMount(){
        axios({
            method: 'get',
            url:`https://theaudiodb.com/api/v1/json/195187/track-mb.php?i=${this.props.tId}`
        })
        .then(response => {
            console.log(response)
            this.setState({
                track: response.data.track[0]})
        })
    }
    render(){
        return(
            <div>
                <p>
                   {this.state.track.strTrack} 
                </p>
                <img src={this.state.track.strTrackThumb}/>
            </div>
        )
    }
}
export default Track;