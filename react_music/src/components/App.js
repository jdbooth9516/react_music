import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import MusicTable from "./MusicTable/MusicTable";

export class App extends Component {
  state = {
    songs: [],
  };

  refresh = () => {
    this.setState({});
  };

  componentDidMount() {
    this.getAllSongs();
  }

  async getAllSongs() {
    let response = await axios.get("http://127.0.0.1:8000/music/");
    this.setState({
      songs: response.data,
    });
  }

  async deleteSong(song){
     let response = await axios.delete(`http://127.0.0.1:8000/detail/${song}`); 
      window.location.reload();
  }

  render() {
    return (
      <div id='main-body'>
        <h1> Music Library</h1>
        <MusicTable songs={this.state.songs} deleteSong={this.deleteSong}/>
      </div>
    );
  }
}

export default App;
