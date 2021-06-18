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
    this.songs = this.props.songs; //need to pass this in a props

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
    let searchCriteria = event.target.name;
    let serchValue = event.target.value;

    for (let song in this.songs) {
      if (serchValue === song.searchCriteria.value) {
        this.filteredSongs.push(song);
      }
    }
    this.props.updateMusicTable(filteredSongs)
  };

  render() {
    return (
      <div>
        <form onSumbit={(event) => this.handleSubmit(event)}>
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
