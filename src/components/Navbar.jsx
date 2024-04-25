import { Link } from "react-router-dom";
import "../styles/Navbar.css"

function Navbar(){
  return(
    <nav className="third-container">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <p className="logo">Cat's library</p>
      <ul>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/create">Create</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar