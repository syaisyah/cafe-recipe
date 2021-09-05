import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, Form } from "react-bootstrap";
import { editIngredients, deleteIngredientInDB } from "../store/actions/ingredients";
import Swal from "sweetalert2";
export default function IngredientCard(props) {
  const dispatch = useDispatch();
  const { ingredient, index } = props.ingredient;
  const { id, name } = ingredient;
  const [input, setInput] = useState({});

  //handle button edit
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOnChangeEdit = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const editIngredient = () => {
    let updateIngredient = {
      id,
      name: input.name ? input.name : name,
    };
    dispatch(editIngredients(updateIngredient));
    setShow(false);
  };
  
  
  const deleteIngredient = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteIngredientInDB(id))
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
    
  }
  return (
    <>
      <tr>
        <td className="text-center">{index + 1}</td>
        <td>{name}</td>
        <td className="d-flex justify-content-center">
          <Button variant="warning" className="mx-2" onClick={handleShow}>
            Edit
          </Button>
          <Button variant="danger" onClick={deleteIngredient}>Delete</Button>
        </td>
      </tr>

      {/* modal button edit */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Ingredient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" defaultValue={name} onChange={(e) => handleOnChangeEdit(e)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editIngredient}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
