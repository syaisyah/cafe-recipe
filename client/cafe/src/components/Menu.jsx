// sampe  on change dan submit edit belum beres
import React, { useState, useEffect } from "react";
import { Button, Image, Modal, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getRecipeOfMenu,editRecipeToDB, } from "../store/actions/recipes";
import { editMenuToDB, deleteMenuInDB } from "../store/actions/menu";
import Swal from 'sweetalert2'


export default function Menu(props) {
  const { menu, index, dataIngredients} = props.menu;
  const { id } = menu;
  const { data } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();


  //button get resep
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const getRecipe = (e) => {
    e.preventDefault();
    setShow(true);
    dispatch(getRecipeOfMenu(id));
  };
  //button edit menu
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
    setShowEditMenu(false);
  };

  //button edit recipe
  const [recipes, setRecipes] = useState([])
  //const [ingredients, setIngredients] = useState([])
  const [showEditRecipe, setShowEditRecipe] = useState(false);
  const handleCloseEditRecipe = () => setShowEditRecipe(false);
  const showFormEditRecipe = (e) => {
    e.preventDefault();
    setShowEditRecipe(true);
    if (!data.length)  dispatch(getRecipeOfMenu(id));
    let temp = JSON.parse(JSON.stringify(dataIngredients)).map((item, i) => {
      return {
        id: item.id,
        name: item.name,
        isChecked: false,
      }
    })
  
  //kalo id nya sama ada di resep maka isChecked true 
  
   for (let i=0; i< temp.length; i++) {
    let find = data.find((item) => item.IngredientId === temp[i].id)
    console.log(data[i], find, 'find ')
    if (find) {
      temp[i].isChecked = true
    }
   }
    console.log(temp, 'ini temp ')
   setRecipes(temp)
  };
   
  const handleOnChangeEditRecipe = (e, i) => {
    const {checked} = e.target
    let temp = JSON.parse(JSON.stringify(recipes))
    temp[i].isChecked = checked;
    setRecipes(temp)

  }

  const editRecipe = () => {
    let arr = recipes.filter(recipe => recipe.isChecked === true)
    if (arr.length === 0) {
      Swal.fire('Please select the recipe')
    } else {
      dispatch(editRecipeToDB({ MenuId: menu.id, recipes: arr}))
    }
    setShowEditRecipe(false);
  };
  //button delete Menu
  const deleteMenu = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        //delte
        dispatch(deleteMenuInDB(id))
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{menu.name}</td>
        <td>
          <Image style={{ width: "200px", height: "200px" }} src={menu.image} rounded />
        </td>
        <td>
          <Button variant="danger" onClick={getRecipe}>
            Recipe
          </Button>
          <Button variant="info" className="w-5 mx-1" onClick={deleteMenu}>
            Delete
          </Button>
          <Button variant="primary" onClick={showFormEditMenu}>
            Edit Menu
          </Button>
          <Button variant="info" onClick={showFormEditRecipe}>
            Edit Recipe
          </Button>
          {/*  */}
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
          {/* Edit Recipe */}
          <Modal show={showEditRecipe} onHide={handleCloseEditRecipe}>
            <Modal.Header closeButton>
              <Modal.Title>{menu.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* {JSON.stringify(recipes)} */}
              <Form>
                <Form.Group className="mb-3">
                 {
                   recipes.map((item, i) => {
                     return (
                      <Form.Check 
                      inline
                      type="checkbox"
                      key={item.id + 'recipes'}
                      label={item.name}
                      checked={item.isChecked}
                      onChange={e => handleOnChangeEditRecipe(e, i)}
                    />
                     )
                   })
                 }
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseEditRecipe}>
                Close
              </Button>
              <Button variant="primary" onClick={editRecipe}>
                Save Recipe
              </Button>
            </Modal.Footer>
          </Modal>
        </td>
      </tr>
    </>
  );
}
