import React, { Component } from "react";
import $ from "jquery";
import Popper from 'popper.js';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import './styles.css'
import "./App.css";
import { Route, Link } from "react-router-dom";
// import components
import Search from './Search'
import TopAlbums from './TopAlbums'
import TopTracks from './TopTracks'
import Track from "./Track";
import Album from "./Album";
import Artist from "./Artist";




class App extends Component {

  render() {

    const Main = () => (
      <div className="App">
        <header>
          <h1 className="header">HLNA Records</h1>
        </header>
        <div className="container">
          {/* img / records company*/}

            <h1>Top Tracks</h1>
            <TopTracks />
          
          <br />
          
            <h1>Top Albums</h1>
            <TopAlbums />
          
          <br />
          <Search />
        </div>
      </div>
    );
    return (
      <React.Fragment>

        <Route exact path="/track/:id" component={Track} />
        <Route exact path="/album/:id" component={Album} />
        <Route exact path="/artist/:name" component={Artist} />
        <Route exact path="/search/:name" component={Search} />
        <Route exact path="/" component={Main} />
      </React.Fragment>
    );
      
  }
  
}

export default App;