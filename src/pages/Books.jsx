import { getBooks } from "../services/services.js"
import BooksList from "../components/BooksList.jsx"
import { useEffect, useState } from "react";

function Books(){
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getBooks()
      .then ((books) => {
        setBooks(books)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  },[]);

  return(
    <div>
      <p>Books</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <BooksList books={books} />
      )}
    </div>
  )
}

export default Books