import React, { Component } from "react";
import { Button } from "reactstrap";
import "./SearchBar.css"

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      artist: "",
      album: "",
      release_date: "",
      likes: 0,
      genre: '',
    };

    // flitered songs go here.
    this.filteredSongs = [];
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    //add verification at some point
    event.preventDefault();
    let songs = this.props.songs;

    for (let song in songs) {
      if (
        this.state.title !== "" &&
        this.state.title === this.props.songs[song].title
      ) {
        this.filteredSongs.push(songs[song]);
      } else if (
        this.state.artist !== "" &&
        this.state.artist === this.props.songs[song].artist
      ) {
        this.filteredSongs.push(songs[song]);
      } else if (
        this.state.album !== "" &&
        this.state.album === this.props.songs[song].album
      ) {
        this.filteredSongs.push(songs[song]);
      } else if (
        this.state.release_date !== "" &&
        this.state.release_date === this.props.songs[song].release_date
      ) {
        this.filteredSongs.push(songs[song]);
      } else if (
        this.state.genre !== "" &&
        this.state.genre === this.props.songs[song].genre
      ) {
        this.filteredSongs.push(songs[song]);
      } 

    }
    if (this.filteredSongs.length > 0){
      this.props.updateMusicTable(this.filteredSongs);
      this.filteredSongs = []
    } else { 
      alert('No songs were found matching that citeria')
    }
  };



  render() {
    return (
      <div id='search-bar'>
        <h3>Search Library</h3>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Song Title</label>
          <input
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <label>Artist</label>
          <input
            type="text"
            name="artist"
            onChange={this.handleChange}
            value={this.state.artist}
          />
          <label>Album Title</label>
          <input
            type="text"
            name="album"
            onChange={this.handleChange}
            value={this.state.album}
          />
          <label>Release Date</label>
          <input
            type="date"
            name="release_date"
            onChange={this.handleChange}
            value={this.state.release_date}
          />
          <label>Genre</label>
          <select name="genre" onChange={this.handleChange}>
            <option value="">None</option>
            <option value="rock">Rock</option>
            <option value="jazz">Jazz</option>
            <option value="international">International</option>
          </select>
          <Button  id="search-btn" type="submit"  color="success">
            Search
          </Button>
        </form>
      </div>
    );
  }
}
