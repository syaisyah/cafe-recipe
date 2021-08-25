import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import setAccessTokenAsync from "../store/actions/users";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import "../index.css";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { access_token } = useSelector((state) => state.users);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (access_token) {
      history.push("/");
    }
  }, [access_token]);

  
  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const login = () => {
    dispatch(setAccessTokenAsync(user));
  };

  return (
    <>
      <Container className="w-25 p-4 login" style={{ marginTop: "150px", backgroundColor: "white", border: "1px solid grey" }}>
        <h2 className="text-center">Login</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Email" name="email" onChange={(e) => handleOnChange(e)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" onChange={(e) => handleOnChange(e)} />
          </Form.Group>
        </Form>
        {/* jika Button masuk dalam form jangan lupa kasi e.preventDefault ya di function login karena dia jadi punya behaviour seperti parent nya yaitu form */}
        <Button variant="primary" type="submit" onClick={login}>
          Login
        </Button>
      </Container>
    </>
  );
}
