import React, { Component } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
// import components
import Search from './Search'
import TopAlbums from './TopAlbums'
import TopTracks from './TopTracks'
import Track from "./Track";


class App extends Component {

  render() {

    const Main = ()=>(
      <div className="App">
        <Search />
        {/* the form must be always on the top of the page 'All pages', BUT on submit it should direct to 'Search Results Page' */}
        <div className="card">
          {/* rendered in this page 'Home Page' */}
          <h1>Top Tracks</h1>
          {/* <Route exact path="/" component={App} /> */}
          
          {/* 
          when you click on a track it directs you to the 'Track Page'
           */}
          <TopTracks />
          <h1>Top Albums</h1>
          {/* 
          when you click on an album it directs you to the 'Album Page'
           */}
          <TopAlbums />
        </div>
      </div>
    )
    return (
      <React.Fragment>
        <Route exact path="/" component={Main} />
        <Route exact path="/track/:id" component={Track} />
      </React.Fragment>
    );
      
  }
  
}

export default App;
