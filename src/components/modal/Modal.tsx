import React, { useState} from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

interface Props {
    label: string,
    form: JSX.Element
}

const ModalComponent: React.FC<Props> = (props: any) => {

    const [modal, setModal] = useState(false);

    const toggle = ():void => setModal(!modal);

    function submitForm ():void {
        console.log("Function to submit form.")
        toggle();
    }
    
    let bottombar = (
        <>
            <Button onClick={toggle} color="danger">Cancel</Button>
            <Button onClick={submitForm} color="primary">Add note</Button>
        </>
    )
    
      return (
        <div>
        <Button outline color="primary" onClick={toggle}>Open Modal</Button>
        <Modal isOpen={modal} toggle={toggle} centered>
        <ModalHeader>{props.label}</ModalHeader>
        <ModalBody>{props.form}</ModalBody>
        <ModalFooter>{bottombar}</ModalFooter>
        </Modal>
        </div>
      );
}

export default ModalComponent;
