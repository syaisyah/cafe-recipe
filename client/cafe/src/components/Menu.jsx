// sampe  on change dan submit edit belum beres
import React, { useState, useEffect } from "react";
import { Button, Image, Modal, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getRecipeOfMenu } from "../store/actions/recipes";
import { editMenuToDB } from "../store/actions/menu";

export default function Menu(props) {
  const { menu, index } = props.menu;
  const { id } = menu;
  const { data } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const getRecipe = (e) => {
    e.preventDefault();
    setShow(true);
    dispatch(getRecipeOfMenu(id));
  };

  const [showEditMenu, setShowEditMenu] = useState(false);
  const [editMenu, setEditMenu] = useState({});
  const showFormEditMenu = (e) => {
    e.preventDefault();
    setShowEditMenu(true);
  };

  const handleCloseEditMenu = () => {
    setShowEditMenu(false);
  };
  const handleChangeMenu = (e) => {
    const { name, value } = e.target;
    setEditMenu({ ...editMenu, [name]: value });
  };

  const EditMenu = () => {
    let newMenu = {
      id: menu.id,
      name: editMenu.name ? editMenu.name : menu.name,
      image: editMenu.image ? editMenu.image : menu.image,
    };

    setEditMenu(newMenu);
    dispatch(editMenuToDB(newMenu));
  };

  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{menu.name}</td>
        <td>
          <Image style={{ width: "200px", height: "200px" }} src={menu.image} rounded />
        </td>
        <td className="">
          <Button variant="danger" onClick={getRecipe}>
            Recipe
          </Button>
          {/* <Button variant="danger" onClick={handleShow}>
              Recipe
            </Button> */}
          <Button variant="info" className="w-5 mx-1">
            Delete
          </Button>
          <Button variant="primary" onClick={showFormEditMenu}>
            Edit Menu
          </Button>
          <Button variant="info" className="w-5 mx-1">
            Edit Recipe
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                <b> {menu.name}</b>{" "}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>{data.length ? data.map((recipe) => <li>{recipe.Ingredient.name}</li>) : <p>Do not have recipe yet</p>}</div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          {/* edit Menu */}
          <Modal show={showEditMenu} onHide={handleCloseEditMenu}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Menu</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="name" defaultValue={menu.name} onChange={(e) => handleChangeMenu(e)} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="text" name="image" defaultValue={menu.image} onChange={(e) => handleChangeMenu(e)} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseEditMenu}>
                Close
              </Button>
              <Button variant="primary" onClick={EditMenu}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </td>
      </tr>
    </>
  );
}
