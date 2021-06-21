import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import MusicTable from "./MusicTable/MusicTable";
import CreateEntry from "./CreateEntry/CreateEntry";
import SearchBar from "./SearchBar/SearchBar"
import { Navbar, Button} from "reactstrap"
import UpdateEntry from "./UpdateEntry/UpdateEntry";

export class App extends Component {
  state = {
    updateVisible: false,
    visible: true,
    selectedSong: 0,
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

  async deleteSong(song) {
    let response = await axios.delete(`http://127.0.0.1:8000/detail/${song}`);
    this.getAllSongs();
  }

  async createNewSong(song) {
    let response = await axios.post("http://127.0.0.1:8000/music/", song);
    this.getAllSongs();
  }

  async updateSong(Id, song) {
    let response = await axios.put(`http://127.0.0.1:8000/detail/${Id}`, song);
    this.getAllSongs();
  }

  updateMusicTable = (newSongs) => {
    this.setState({
      songs: newSongs,
    });
  };

  makeVisible = ()  => {
    this.setState ({ 
      updateVisible: !this.state.updateVisible,
      visible: !this.state.visible
    })
  }

  selectedSong = (id) => { 
    this.setState ({
      selectedSong: id
    })
  }

  render() {
    return (
      <div id="main-body">
        <Navbar color="dark" dark expand="md">
          <div>
            <h1> Music Library</h1>
          </div>
          <div>
            <Button
              id="home-btn"
              onClick={this.getAllSongs.bind(this)}
              color="info"
            >
              Home
            </Button>
          </div>
        </Navbar>
        <div className="search-container">
          <SearchBar
            songs={this.state.songs}
            updateMusicTable={this.updateMusicTable}
          />
        </div>
        <MusicTable
          songs={this.state.songs}
          deleteSong={this.deleteSong.bind(this)}
          makeVisible={this.makeVisible.bind(this)}
          selectedSong={this.selectedSong.bind(this)}
        />
        {this.state.visible ? (
          <CreateEntry createNewSong={this.createNewSong.bind(this)} />
        ) : null}
        {this.state.updateVisible ? (
          <UpdateEntry
            selectedSong={this.state.selectedSong}
            updateSong={this.updateSong.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
