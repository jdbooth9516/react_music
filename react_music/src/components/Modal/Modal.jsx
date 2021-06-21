import React , { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

export default function ShowModal(props) {
    const song = props.song
    const [modal, setModal] = useState(props.open)
    const toggle = () => setModal(!modal)
    return (
      <div>
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
                <h5>Title was changed to: {song.title} </h5>
                <h5>Artist was changed to: {song.artist}</h5>
                <h5>Album was changed to: {song.album}</h5>
                <h5>Genre was changed to: {song.genre}</h5>
                <h5>Release Date was changed to: {song.release_date}</h5>
                <h5>Likes was changed to: {song.likes}</h5>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>Close</Button>
              
            </ModalFooter>
          </Modal>
      </div>
    );
}
