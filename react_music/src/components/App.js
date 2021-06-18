import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import MusicTable from "./MusicTable/MusicTable";
import CreateEntry from "./CreateEntry/CreateEntry";
import SearchBar from "./SearchBar/SearchBar"

export class App extends Component {
  state = {
    songs: [],
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

  async createNewSong(song) { 
    let response = await axios.post("http://127.0.0.1:8000/music/", song);
    window.location.reload();
  }

  updateMusicTable = (newSongs)  => { 
   this.setState ({
      songs: newSongs,
   });
  }

  render() {
    return (
      <div id="main-body">
        <h1> Music Library</h1>
        <div className= 'search-container'>
          <SearchBar
            songs={this.state.songs}
            updateMusicTable={this.updateMusicTable}
          />
        </div>
        <MusicTable songs={this.state.songs} deleteSong={this.deleteSong} />
        <CreateEntry createNewSong={this.createNewSong} />
      </div>
    );
  }
}

export default App;
