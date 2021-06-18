import React, { Component } from "react";
import { Button } from "reactstrap";


export default class CreateEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      artist: "",
      album: "",
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
      <div>
        <h3>Add Entry to the Library</h3>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Song Title</label>
          <input
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <label>Artist Name</label>
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
          <label>Likes</label>
          <input
            type="number"
            name="likes"
            onChange={this.handleChange}
            value={this.state.likes}
          />
          <Button type="submit" outline color="info">
            Create Entry
          </Button>
        </form>
      </div>
    );
  }
}
