import { Link } from "react-router-dom";

export function UpdateBook({id, setModalChildren}){
  console.log(id)
  return(
    <div>
      <p>Do you want to update or correct something about this book?</p>
      <Link to={`/update/${id}`}>Yes, edit <img/></Link>
      <button onClick={() => setModalChildren("book detail")}>No, cancel</button>
    </div>
  )
}