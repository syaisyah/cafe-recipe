import { Container, Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <>
      <Container className="w-25 d-flex justify-content-lg-center" style={{marginTop: "200px"}}>
      <Spinner  animation="grow" variant="danger" size="lg"/> <h3>Loading ...</h3>
      </Container>
    </>
  );
}
