import React, { useState } from "react";
import { Col, Button, Modal, Form } from "react-bootstrap";
import { useHistory } from "react-router";
import { addIngredientsToDB } from "../store/actions/ingredients";
import { useDispatch } from "react-redux";


export default function NavBar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [input, setInput] = useState({});


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const addIngredient = () => {
    dispatch(addIngredientsToDB(input));
    setShow(false);
  };
  const showFormAddMenu = () => history.push("/menu/add");

  const moveToHome = () => {
    history.push("/");
  }

  const showIngredients = () => {
    history.push('/ingredients')
  }


  return (
    <>
      <Col md={2} className="bg-light py-5" style={{ height: "300vh" }}>
        <div className="d-flex flex-column justify-content-space-between align-items-center my-5">
          <Button variant="info" className="w-50 mb-2" onClick={showFormAddMenu}>
            + Menu
          </Button>
          <Button variant="warning" className="w-50" onClick={handleShow}>
            + Ingredients
          </Button>
        </div>
        <div className="d-flex flex-column justify-content-space-between align-items-center my-5">
          <Button variant="info" className="w-50 mb-2" onClick={moveToHome}>
            Menu
          </Button>
          <Button variant="warning" className="w-50 mb-2" onClick={showIngredients}>
            Ingredients
          </Button>
        </div>
        {/* Form Add Ingredients  */}
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>ADD INGREDIENT</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Espresso" name="name" onChange={(e) => handleOnChange(e)} />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={addIngredient}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
          {/* End Form Add Ingredients  */}
      </Col>
    </>
  );
}
