// buat tabel untuk list ingredients
import { useEffect } from "react";
import { Table, Row, Col } from "react-bootstrap";
import NavBar from "../components/NavBar";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { getIngredientsAsync } from "../store/actions/ingredients";
import { useDispatch, useSelector } from "react-redux";
import IngredientCard from "../components/IngredientCard";
export default function Ingredient() {
  const { data, loading, error } = useSelector((state) => state.ingredients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredientsAsync);
  }, [dispatch]);

  if (loading) return <Loading />;
  if (error) return <Error />;
  return (
    <>
     <Row className="w-100">
        <NavBar />
        <Col md={10} className=" p-5">
          {/* <Container> */}
          <h1 className="my-5">Ingredients List</h1>
          <Table striped bordered hover style={{ backgroundColor: "white"}}>
            <thead>
              <tr>
                <th className="text-center">No</th>
                <th className="text-center">Name</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((ingredient, index) => {
                  return <IngredientCard key={ingredient.id + 'ingredient'} ingredient={{ingredient, index}}/>
                } )
              }

            </tbody>
          </Table>
          {/* </Container> */}
        </Col>
      </Row>
    </>
  );
}
