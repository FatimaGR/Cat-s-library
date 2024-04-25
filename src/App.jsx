import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Books from "./pages/Books.jsx"
import Create from "./pages/Create.jsx"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/books" element={<Books />}/>
        <Route path="/create" element={<Create />}/>
      </Routes>
    </>
  )
}

export default App
