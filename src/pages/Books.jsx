import { getBooks } from "../services/services.js"
import BooksList from "../components/BooksList.jsx"
import { useEffect, useState } from "react";
import Search from "../components/Search.jsx";

function Books(){
  const [intialBooks, setInitialBooks] = useState([])
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getBooks()
      .then ((books) => {
        setBooks(books)
        setInitialBooks(books)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  },[]);

  function handleSearchSubmit(name){
    if (name != ""){
      const nameUpper = name.toUpperCase()
      const booksFiltered = books.filter((book) => book.name.toUpperCase().includes(nameUpper))
      setBooks(booksFiltered)
    } else {
      setBooks(intialBooks)
    }
  }

  return(
    <div>
      <p>Books</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Search onSubmit={handleSearchSubmit}/>
          <BooksList books={books} />
        </div>
      )}
    </div>
  )
}

export default Books