import React from "react";
import { Jumbotron, Table, Button } from "reactstrap";
import './MusicTable.css'

export default function MusicTable(props) {
  return (
    <Jumbotron id="jumbo">
      <Table striped responsive>
        <thead>
          <tr>
            <th>Id #</th>
            <th>Song Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Likes</th>
          </tr>
        </thead>
        <tbody>
          {props.songs.map((song, index) => (
            <tr data-index={index}>
              <th scope="row">{song.id}</th>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.genre}</td>
              <td>{song.release_date}</td>
              <td>{song.likes}</td>
              <td>
                <Button
                  id="edit-btn"
                  color="info"
                  onClick={() => {props.makeVisible(); props.selectedSong(song.id)}}
                >
                  Edit
                </Button>
              </td>
              <td>
                <Button
                  id="delete-btn"
                  color="danger"
                  onClick={() => {
                    props.deleteSong(song.id);
                  }}
                >
                  Del
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Jumbotron>
  );
}
