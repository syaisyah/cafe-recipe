import React from "react";
import { Button, Image } from "react-bootstrap";


export default function Menu(props) {
  // const menu = props();
  console.log(props, ">>>");
  return (
    <>
      <tr>
        <td>1</td>
        <td>Caramel Machiato</td>
        <td>
          <Image style={{ width: "200px", height: "200px" }} src="https://bakingmischief.com/wp-content/uploads/2016/01/better-than-starbucks-caramel-macchiato-image-681x1024.jpg" rounded />
        </td>
        <td className="d-flex justify-content-start">
          <Button variant="info" className="w-5 mx-1">
            Detail
          </Button>
          <Button variant="info" className="w-5 mx-1">
            Delete
          </Button>
          <Button variant="info" className="w-5 mx-1">
            Edit Menu
          </Button>
          <Button variant="info" className="w-5 mx-1">
            Edit Recipe
          </Button>
        </td>
      </tr>
    </>
  );
}
