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
  console.log(data, loading, error, ">>>> add menu form ");
  const history = useHistory();
  const dispatch = useDispatch();
  const [input, setInput] = useState({});

  useEffect(() => {
    dispatch(getIngredientsAsync());
  }, []);

  const handleOnChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
  };

  const submit = () => {};
  const clearAll = () => {
    setInput({});
  };
  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <Row>
        <NavBar />
        <Col md={10} className="bg-warning">
          <Container className=" p-5" style={{ marginTop: "150px", backgroundColor: "white", border: "1px solid grey" }}>
            <h2 className="mb-3"> Add Menu</h2>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Vanilla Latte" name="name" onChange={(e) => handleOnChange(e)} />
              </Form.Group>

              <Form.Group className="mb-5">
                <Form.Label>Image Url</Form.Label>
                <Form.Control type="text" placeholder="Url for image" name="image" onChange={(e) => handleOnChange(e)} />
              </Form.Group>

              <Form.Group className="mb-5">
                <Form.Label><b>INGREDIENTS:</b> </Form.Label>
                <div>
                  {data.map((ingredient) => {
                    return <Form.Check inline type="checkbox" key={ingredient.id + "ingredient"} label={ingredient.name} />;
                  })}
                </div>
              </Form.Group>
            </Form>
            <Button variant="danger" type="submit" className="w-5 mx-2" onClick={submit}>
              Submit
            </Button>
            <Button variant="danger" type="submit" className="w-5 mx-2" onClick={clearAll}>
              Clear
            </Button>
          </Container>
        </Col>
      </Row>
    </>
  );
}
