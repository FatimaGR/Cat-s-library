import { deleteBook } from "../services/services.js";
import "../styles/Modal.css"
import nina from "../assets/nina-confirm.png"

function DeleteBook({id, setModalChildren}){
  function refreshPage() {
    window.location.reload(false);
  }

  function handleDelete(){
    console.log(id)
    deleteBook(id)
    .then(refreshPage)
    .catch(error => console.log(error))
  }

  return(
    <div className="delete">
      <div>
        <img src={nina} alt="" />
        <h1>Are you sure?</h1>
      </div>
      <p>If the information in this book is not accurate or offensive, you can delete it. If not, please consider that a cat fanatic created this recommendation with love.</p>
      <div className="delete-buttons">
        <button onClick={handleDelete} className="delete-button">Yes, delete</button>
        <button onClick={() => setModalChildren("book detail")} className="delete-button">No, cancel</button>
      </div>
    </div>
  )
}

export default DeleteBook