import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      artist: "",
      album: "",
      release_date: "",
      likes: 0,
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
      }
    }
    this.props.updateMusicTable(this.filteredSongs);
  };

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Song Title</label>
          <input
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}
