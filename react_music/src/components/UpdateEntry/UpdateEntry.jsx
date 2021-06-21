import React, { Component } from "react";
import { Button, Form} from "reactstrap";
import './UpdateEntry.css';

export default class UpdateEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
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
  
  componentDidMount() { 
    this.setState({
      title: this.song[0].title,
      artist: this.song[0].artist,
      album: this.song[0].album,
      genre: this.song[0].genre,
      release_date: this.song[0].release_date,
      likes: this.song[0].likes,
    });
  }

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
        <h3>Update Song Information</h3>
        <Form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Song Title:</label>
          <input
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <br />
          <label>Artist Name:</label>
          <input
            type="text"
            name="artist"
            onChange={this.handleChange}
            value={this.state.artist}
          />
          <br />
          <label>Album Title:</label>
          <input
            type="text"
            name="album"
            onChange={this.handleChange}
            value={this.state.album}
          />
          <br />
          <label>Genre:</label>
          <input
            type="text"
            name="genre"
            onChange={this.handleChange}
            value={this.state.genre}
          />
          <br />
          <label>Release Date:</label>
          <input
            type="date"
            name="release_date"
            onChange={this.handleChange}
            value={this.state.release_date}
          />
          <br />
          <label>Likes:</label>
          <input
            type="number"
            name="likes"
            onChange={this.handleChange}
            value={this.state.likes}
          />
          <br />
          <Button id="create-btn" type="submit" color="info">
            Update Song
          </Button>
        </Form>
      </div>
    );
  }
}
