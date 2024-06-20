import { deleteBook } from "../services/services";

function DeleteBook({id, setModalChildren}){
  function refreshPage() {
    window.location.reload(false);
  }

  function handleDelete(){
    deleteBook(id)
    .then(refreshPage)
  }

  return(
    <div>
      <p>Are you sure?</p>
      <button onClick={handleDelete}>Yes, delete</button>
      <button onClick={() => setModalChildren("book detail")}>No, cancel</button>
    </div>
  )
}

export default DeleteBook