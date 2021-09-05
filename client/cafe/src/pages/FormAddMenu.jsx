import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import axios from 'axios'
import baseURL from "../store/helpers/baseURL";
import { useDispatch } from "react-redux";
import {addMenuToDB} from '../store/actions/menu';

export default function FormAddMenu() {
  const history = useHistory();
  const dispatch = useDispatch()
  const [menu, setMenu] = useState({ name: "", image: "" });
  const [ingredients, setIngredients] = useState([]);
 
  
  useEffect(() => {
    axios({
      url: baseURL + '/ingredients',
      method: "GET",
      headers: { access_token: localStorage.getItem('access_token')}
    })
    .then(({data}) => {
      const options = data.map(({id, name}) => {
       return { id, name, isChecked: false}
    })
      setIngredients(options)
    })
    .catch(err => console.log(err))

  }, []);
  


  const handleOnChangeMenu = (e) => {
    const { name, value } = e.target;
    setMenu({ ...menu, [name]: value });
  };

  const handleOnChangeIngredient = (e, i) => {
    const { checked } = e.target;
    let newIngredients = JSON.parse(JSON.stringify(ingredients))
    newIngredients[i].isChecked = checked;
    setIngredients(newIngredients)
  };

  const submit = () => {
    const filterIngredients = ingredients.filter(item => item.isChecked === true)
    const newMenu = {
      menu, ingredients: filterIngredients
    }
    dispatch(addMenuToDB(newMenu))
    history.push('/')
  };

  const moveToHome = () => history.push('/')
  return (
    <> 
      <Row className="w-100">
        <NavBar />
        <Col md={10}>
          <Container className=" p-5" style={{ marginTop: "150px", backgroundColor: "white", border: "1px solid grey" }}>
            <h2 className="mb-3"> Add Menu</h2>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Vanilla Latte" name="name" onChange={(e) => handleOnChangeMenu(e)} />
              </Form.Group>

              <Form.Group className="mb-5">
                <Form.Label>Image Url</Form.Label>
                <Form.Control type="text" placeholder="Url for image" name="image" onChange={(e) => handleOnChangeMenu(e)} />
              </Form.Group>

              <Form.Group className="mb-5">
                <Form.Label>
                  <b>INGREDIENTS:</b>
                </Form.Label>
                <div>
                  {ingredients.map((item, index) => {
                    return (
                      <Form.Check 
                      inline 
                      key={item.id + "ingredient"} 
                      label={item.name} 
                      checked={item.isChecked} 
                      onChange={(e) => handleOnChangeIngredient(e, index)}
                      />
                    )})}
                </div>
              </Form.Group>
            </Form>
            <Button variant="success" type="submit" className="w-5 mx-2" onClick={submit}>
              Submit
            </Button>
            <Button variant="warning" type="submit" className="w-5 mx-2" onClick={moveToHome}>
              Back
            </Button>
          </Container>
        </Col>
      </Row>
    </>
  );
}
