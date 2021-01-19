import React,{ useState } from "react";
import "./SignUpStyle.scss";
import Modal from 'react-bootstrap/Modal'


function SignUpPage() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [show, setShow] = useState(false);

  const handleModal = () => setShow(!show);

  const { email, password, confirmpassword } = inputs;
  return (
          
    <Modal
      show ={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <div className = "modal-back"></div>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        
      </Modal.Footer>
    </Modal>
        
  );
}

export { SignUpPage };
