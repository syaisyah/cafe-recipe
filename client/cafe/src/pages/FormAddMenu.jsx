// https://tariqul-islam-rony.medium.com/multiple-checkbox-handling-by-react-js-84b1d49a46c6
import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getIngredientsAsync } from "../store/actions/ingredients";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function FormAddMenu() {
  const { data, loading, error } = useSelector((state) => state.ingredients);
  const history = useHistory();
  const dispatch = useDispatch();
  const [menu, setMenu] = useState({ name: "", image: "" });
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    dispatch(getIngredientsAsync());
  }, [ingredients]);

  useEffect(() => {
    setIngredients(data);
  }, [ingredients]);

  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setMenu({ ...menu, [name]: value });
  };

  const handleIngredients = (e, index) => {
    e.preventDefault();
    // let dataIngredients = data.map((ingredient) => (ingredient.isChecked = false));
    // console.log(dataIngredients, ">>>>>>>>>>>dataIngredients");
    // const check = ingredients.map((ingredient, i) => (index === i ? ingredient : !ingredient));
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    console.log(value, e.target.name, "value name ");
    const tempIngredients = JSON.parse(JSON.stringify(data));
    tempIngredients[index] = value;
    setIngredients(tempIngredients);
    console.log(ingredients, "ingreadients ");
  };

  const submit = () => {
    console.log(menu, "menu input");
    console.log(ingredients, "input ingredient ..");
  };
  const backToHome = () => {
    history.push("/");
  };
  //if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <Row>
        <NavBar />
        <Col md={10}>
          <Container className=" p-5" style={{ marginTop: "150px", backgroundColor: "white", border: "1px solid grey" }}>
            <h2 className="mb-3"> Add Menu</h2>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Vanilla Latte" name="name" onChange={handleOnChange} />
              </Form.Group>

              <Form.Group className="mb-5">
                <Form.Label>Image Url</Form.Label>
                <Form.Control type="text" placeholder="Url for image" name="image" onChange={handleOnChange} />
              </Form.Group>

              <Form.Group className="mb-5">
                <Form.Label>
                  <b>INGREDIENTS:</b>{" "}
                </Form.Label>
                <div>
                  {data.map((el, index) => {
                    return (
                      <Form.Check
                        inline
                        id={`custom-checkbox-${index}`}
                        type="checkbox"
                        key={el.id + "ingredient"}
                        label={el.name}
                        name={el.name}
                        value={el.id}
                        // checked={ingredients[index]}
                        onChange={(e) => handleIngredients(e, index)}
                        // checked={data.id === ingredient.id ? "checked" : null}
                      />
                    );
                  })}
                </div>
              </Form.Group>
            </Form>
            <Button variant="success" type="submit" className="w-5 mx-2" onClick={submit}>
              Submit
            </Button>
            <Button variant="danger" type="submit" className="w-5 mx-2" onClick={backToHome}>
              Back
            </Button>
          </Container>
        </Col>
      </Row>
    </>
  );
}
