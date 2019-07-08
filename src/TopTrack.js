import React,{Component} from 'react'

class TopTrack extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.loved.strTrack}</h1>
                <img src={this.props.loved.strTrackThumb}/>
            </div>
        )
    }
}

export default TopTrack;