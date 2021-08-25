// import React, { useState, useEffect } from "react";
// import NavBar from "../components/NavBar";
// import { Modal, Button } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router";
// import Loading from "../components/Loading";
// import Error from "../components/Error";

// export default function FormAddIngredient(props) {
//   console.log(props,' add ingred modal  masuk')
//   const { data, loading, error } = useSelector((state) => state.ingredients);
//   const history = useHistory();
//   const dispatch = useDispatch();
//   const [input, setInput] = useState({});
//   const [show, setShow] = useState(props.show);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   useEffect(() => {}, []);

//   // if (loading) return <Loading />;
//   // if (error) return <Error />;

//   return (
//     <>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }
