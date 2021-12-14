import React from 'react';
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';

function ConfirmModal(props){
    return (
        <Modal isOpen={props.isOpenModalConfirm} toggle={props.toggleModalConfirm}>
            <ModalBody>
                <h5 style={{ color: "gray" }}>{props.message}</h5>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={props.accept}>Accept</Button>{' '}
                <Button color="danger" onClick={props.cancel}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}

export default ConfirmModal;