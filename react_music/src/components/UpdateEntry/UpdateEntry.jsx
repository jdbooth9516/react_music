import React, { Component } from "react";
import { ModalBody, Modal, ModalHeader, ModalFooter } from "reactstrap";
import App from '../App'

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
    };
    this.songId = props
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    App.updateSong(this.songId, this.state);
  };

  render() {
    return (
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Song Info</ModalHeader>
        <ModalBody>
          <From onSubmit={(event) => this.handleSubmit(event)}>
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
            <label>Genre</label>
            <input
              type="text"
              name="genre"
              onChange={this.handleChange}
              value={this.state.genre}
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
            <Button id="create-btn" type="submit" color="info">
              Create Entry
            </Button>
          </From>
        </ModalBody>
      </Modal>
    );
  }
}
