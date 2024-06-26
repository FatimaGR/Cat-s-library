import { Link } from "react-router-dom"
import icon from "../assets/bx-menu-alt-right.svg"
import "../styles/Navbar.css"
import { useState } from "react"

function Navbar(){
  const [menuToggle, setMenuToggle] = useState(false)

  function handleMenuToggle(){
    setMenuToggle(!menuToggle)
  }

  return(
    <nav className="third-container">
      <ul className="big-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <p className="logo">Cat's library</p>
      <ul className="big-menu">
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/create">Create</Link></li>
      </ul>
      <img src={icon} alt="menu" className="menu" onClick={handleMenuToggle}/>
      <ul className={menuToggle ? "small-menu" : "none"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/create">Create</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar