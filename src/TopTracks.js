import React,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

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
          const allTrack = response.data.loved
          this.setState({
            top50Tracks: allTrack
          })
        })
      }
    render(){
        return (
          <div
            id="track"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner album">
              {this.state.top50Tracks.map((track, index) => (
                <div
                  className={`carousel-item ${
                    index === 0 ? "active" : ""
                  }`}
                >
                  <Link to={{
                    pathname:`/track/${track.strMusicBrainzID}`,
                    state:{
                      image:track.strTrackThumb
                    }
                  }}>

                    {track.strTrackThumb != null ? (
                      <img
                        src={track.strTrackThumb}
                        className="d-block w-100"
                        alt="NO IMG"
                      />
                    ) : (
                      <div class="container">
                        { <img
                          src="http://citasantehnika.lv/content/images/default-image.gif"
                          className="d-block w-100 image"
                          alt="IMG"
                        /> }

                        <div class="centered">{track.strTrack}</div>
                      </div>
                    )}
                    
                  </Link>
                </div>
              ))}
            </div>
            <a
              class="carousel-control-prev"
              href="#track"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              />
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#track"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              />
              <span class="sr-only">Next</span>
            </a>
          </div>
        );
        
    }
}

export default TopTracks;