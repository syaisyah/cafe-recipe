import { Table, Row, Col, Button, Container } from "react-bootstrap";
export default function IngredientCard(props) {
  const { ingredient, index } = props.ingredient;
  const { id, name } = ingredient;
  return (
    <>
      <tr>
        <td className="text-center">{index + 1}</td>
        <td>{name}</td>
        <td className="d-flex justify-content-center">
          <Button variant="warning" className="mx-2">
            Edit
          </Button>
          <Button variant="danger" className="mx-2">
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
}
