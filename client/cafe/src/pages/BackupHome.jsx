// import React from "react";
// import { Row, Col, Button, Card, Form, Table, Image } from "react-bootstrap";
// import NavBar from "../components/NavBar";

// export default function Home() {
//   console.log("masuk hosme ");
//   return (
//     <>
//       <Row>
//         <NavBar />
//         <Col md={10} className=" p-5">
//           {console.log("masuk gaya aaaa")}
//           <Col className="d-flex justify-content-between">
//             <h3>
//               <i>Hai Admin ... </i>
//             </h3>
//             <Button variant="dark">Logout</Button>
//           </Col>
//           <Col>
//             <Card className="d-flex flex-row justify-content-start mt-3 mb-5">
//               <Card.Body>
//                 <Card.Title>TOTAL MENU</Card.Title>
//                 <Card.Subtitle className="mb-2 text-muted">20</Card.Subtitle>
//               </Card.Body>
//               <Card.Body>
//                 <Card.Title>TOTAL INGREDIENTS</Card.Title>
//                 <Card.Subtitle className="mb-2 text-muted">10</Card.Subtitle>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col>
//             <Form.Control type="text" className="mb-3 w-50" placeholder="Search menu ..." />
//             {/* filter use dropdown */}
//             <Table striped bordered hover>
//               <thead>
//                 <tr>
//                   <th>No</th>
//                   <th>Menu</th>
//                   <th>Image</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* <Menu /> */}
//                 <tr>
//                   <td>1</td>
//                   <td>Caramel Machiato</td>
//                   <td>
//                     <Image style={{ width: "200px", height: "200px" }} src="https://bakingmischief.com/wp-content/uploads/2016/01/better-than-starbucks-caramel-macchiato-image-681x1024.jpg" rounded />
//                   </td>
//                   <td className="d-flex justify-content-start">
//                     <Button variant="info" className="w-5 mx-1">
//                       Detail
//                     </Button>
//                     <Button variant="info" className="w-5 mx-1">
//                       Delete
//                     </Button>
//                     <Button variant="info" className="w-5 mx-1">
//                       Edit Menu
//                     </Button>
//                     <Button variant="info" className="w-5 mx-1">
//                       Edit Recipe
//                     </Button>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>2</td>
//                   <td>Caramel Latte</td>
//                   <td>
//                     <Image
//                       style={{ width: "200px", height: "200px" }}
//                       src="https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE2020061210503133405/photo/menueditor_item_1d4200f3f5114711ab9c7be2bc9b32f3_1591958986495640602.webp"
//                       rounded
//                     />
//                   </td>
//                   <td className="d-flex justify-content-start">
//                     <Button variant="info" className="w-5 mx-1">
//                       Detail
//                     </Button>
//                     <Button variant="info" className="w-5 mx-1">
//                       Delete
//                     </Button>
//                     <Button variant="info" className="w-5 mx-1">
//                       Edit Menu
//                     </Button>
//                     <Button variant="info" className="w-5 mx-1">
//                       Edit Recipe
//                     </Button>
//                   </td>
//                 </tr>
//               </tbody>
//             </Table>
//           </Col>
//         </Col>
//       </Row>
//     </>
//   );
// }
