const [showEditRecipe, setShowEditRecipe] = useState(false);

const handleCloseEditRecipe = () => setShowEditRecipe(false);
const handleShowEditRecipe = () => setShowEditRecipe(true);
const editRecipe =() => {
  setShowEditRecipe(false);
}
return (
  <>
    <Button variant="primary" onClick={handleShowEditRecipe}>
      Launch demo modal
    </Button>

    <Modal show={show} onHide={handleCloseEditRecipe}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseEditRecipe}>
          Close
        </Button>
        <Button variant="primary" onClick={editRecipe}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
