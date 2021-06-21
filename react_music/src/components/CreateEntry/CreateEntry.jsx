import React, { Component } from "react";
import { Button } from "reactstrap";
import "./CreateEntry.css"


export default class CreateEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      artist: "",
      album: "",
      genre: "",
      release_date: "",
      likes: 0,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createNewSong(this.state);
  };

  render() {
    return (
      <div id='create-bar'>
        <h3>Add Entry to the Library</h3>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Song Title: </label>
          <input
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          /> <br />
          <label>Artist Name: </label>
          <input
            type="text"
            name="artist"
            onChange={this.handleChange}
            value={this.state.artist}
          /> <br />
          <label>Album Title: </label>
          <input
            type="text"
            name="album"
            onChange={this.handleChange}
            value={this.state.album}
          /> <br />
          <label>Genre: </label>
          <input
            type="text"
            name="genre"
            onChange={this.handleChange}
            value={this.state.genre}
          /> <br />
          <label>Release Date: </label>
          <input
            type="date"
            name="release_date"
            onChange={this.handleChange}
            value={this.state.release_date}
          /> <br />
          <label>Likes: </label>
          <input
            type="number"
            name="likes"
            onChange={this.handleChange}
            value={this.state.likes}
          /> <br /> 
          <Button  id="create-btn" type="submit" color="info">
            Create Entry
          </Button>
        </form>
      </div>
    );
  }
}
