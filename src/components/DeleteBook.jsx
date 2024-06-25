import { deleteBook } from "../services/services.js";
import "../styles/Modal.css"

function DeleteBook({id, setModalChildren}){
  function refreshPage() {
    window.location.reload(false);
  }

  function handleDelete(){
    deleteBook(id)
    .then(refreshPage)
    .catch(error => console.log(error))
  }

  return(
    <div className="delete">
      <p>Are you sure?</p>
      <button onClick={handleDelete}>Yes, delete</button>
      <button onClick={() => setModalChildren("book detail")}>No, cancel</button>
    </div>
  )
}

export default DeleteBook