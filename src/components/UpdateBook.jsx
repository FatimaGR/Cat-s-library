import { Link } from "react-router-dom";
import "../styles/Modal.css"

export function UpdateBook({id, setModalChildren}){
  return(
    <div className="update">
      <p>Do you want to update or correct something about this book?</p>
      <Link to={`/update/${id}`}>Yes, edit <img/></Link>
      <button onClick={() => setModalChildren("book detail")}>No, cancel</button>
    </div>
  )
}