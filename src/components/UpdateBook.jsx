import { Link } from "react-router-dom";

export function UpdateBook({setModalChildren}){
  return(
    <div>
      <p>Do you want to update or correct something about this book?</p>
      <Link to="/update">Yes, edit <img/></Link>
      <button onClick={() => setModalChildren("book detail")}>No, cancel</button>
    </div>
  )
}