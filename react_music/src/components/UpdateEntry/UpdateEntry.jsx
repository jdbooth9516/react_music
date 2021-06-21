import React, { Component } from "react";
import { Button, Form} from "reactstrap";

export default class UpdateEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      artist: "",
      album: "",
      genre: "",
      release_date: "",
      likes: 0,
      visible: false
    };
    this.songId = props.selectedSong
    this.song  = props.songs.filter(song => song.id == this.songId)
  };
  
  

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateSong(this.songId, this.state);
    this.props.modalOpen(this.state)
  };

  render() {
    return (
      <div id="update-form">
      <Form onSubmit={(event) => this.handleSubmit(event)}>
        <label>Song Title</label>
        <input
          type="text"
          name="title"
          onChange={this.handleChange}
          value={this.song[0].title}
        />
        <label>Artist Name</label>
        <input
          type="text"
          name="artist"
          onChange={this.handleChange}
          value={this.song[0].artist}
        />
        <label>Album Title</label>
        <input
          type="text"
          name="album"
          onChange={this.handleChange}
          value={this.song[0].album}
        />
        <label>Genre</label>
        <input
          type="text"
          name="genre"
          onChange={this.handleChange}
          value={this.song[0].genre}
        />
        <label>Release Date</label>
        <input
          type="date"
          name="release_date"
          onChange={this.handleChange}
          value={this.song[0].release_date}
        />
        <label>Likes</label>
        <input
          type="number"
          name="likes"
          onChange={this.handleChange}
          value={this.song[0].likes}
        />
        <Button id="create-btn" type="submit" color="info">
          Create Entry
        </Button>
      </Form>
      </div>
    );
  }
}
