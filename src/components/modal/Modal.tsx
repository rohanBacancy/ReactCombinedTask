import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

interface Props {
  buttonTitle: string;
  label: string;
  form: JSX.Element;
  modal: boolean;
  toggle: () => void;
}

const ModalComponent: React.FC<Props> = ({
  label,
  form,
  modal,
  toggle,
}) => {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} centered>
        <ModalHeader toggle={toggle}>{label}</ModalHeader>
        <ModalBody>{form}</ModalBody>
      </Modal>
    </div>
  );
};

export default ModalComponent;
