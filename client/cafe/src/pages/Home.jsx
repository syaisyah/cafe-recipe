import React, { useEffect } from "react";
import { Row, Col, Button, Card, Form, Table } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { getAllMenuAsync } from "../store/actions/menu";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Menu from "../components/Menu";
import { getIngredientsAsync } from "../store/actions/ingredients";
import { useHistory } from "react-router";

export default function Home() {
  const { data, loading, error } = useSelector((state) => state.menu);
  const { data: dataIngredients } = useSelector((state) => state.ingredients);

  const dispatch = useDispatch();
  const history = useHistory();
  
  useEffect(() => {
    dispatch(getAllMenuAsync());
  }, []);

  useEffect(() => {
    dispatch(getIngredientsAsync());
  }, []);

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("access_token");
    history.push("/");
  };

  if (loading) return <Loading />;
  if (error) return <Error />;
  return (
    <>
      <Row>
        <NavBar />
        <Col md={10} className=" p-5">
          <Col className="d-flex justify-content-between">
            <h3>
              <i>Hai Admin... </i>
            </h3>
            <Button variant="dark" onClick={logout}>
              Logout
            </Button>
          </Col>
          <Col>
            <Card className="d-flex flex-row justify-content-start mt-3 mb-5">
              <Card.Body>
                <Card.Title>
                  <b>TOTAL MENU</b>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{data.length}</Card.Subtitle>
              </Card.Body>
              <Card.Body>
                <Card.Title>
                  <b>TOTAL INGREDIENTS</b>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{dataIngredients.length}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Form.Control type="text" className="mb-3 w-50" placeholder="Search menu ..." />
            {/* filter use dropdown */}
            <Table striped bordered hover style={{backgroundColor: "white"}} >
              <thead>
                <tr>
                  <th>No</th>
                  <th>Menu</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((menu, i) => {
                  return <Menu key={menu.id + "menuId"} menu={{ menu, index: i }} />;
                })}
              </tbody>
            </Table>
          </Col>
        </Col>
      </Row>
    </>
  );
}
