import React,{Component} from 'react'

class TopTrack extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.tName}</h1>
                <img src={this.props.arImg}/>
            </div>
        )
    }
}

export default TopTrack;