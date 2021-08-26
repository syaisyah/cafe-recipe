import React, { useState, useEffect } from "react";
import { Button, Image, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getRecipeOfMenu } from "../store/actions/recipes";

export default function Menu(props) {
  const { menu, index } = props.menu;
  const { id } = menu;
  const { data } = useSelector((state) => state.recipes);

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => {
  //   setShow(true);
  // };
  const getRecipe = (e) => {
    e.preventDefault();
    setShow(true);
    dispatch(getRecipeOfMenu(id));
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
            <Button variant="info" className="w-5 mx-1">
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
        </td>
      </tr>
    </>
  );
}
