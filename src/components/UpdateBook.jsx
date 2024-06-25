import { Link } from "react-router-dom";
import "../styles/Modal.css"
import kai from "../assets/kai-confirm.png"

export function UpdateBook({id, setModalChildren}){
  return(
    <div className="update">
      <img src={kai} alt="" />
      <p className="update-title">Do you want to update or correct something about this book?</p>
      <div className="delete-buttons">
        <Link to={`/update/${id}`} className="update-button">Yes, edit <img/></Link>
        <button onClick={() => setModalChildren("book detail")} className="update-button">No, cancel</button>
      </div>
    </div>
  )
}