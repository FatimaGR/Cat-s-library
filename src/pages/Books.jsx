import { getBooks } from "../services/services.js"
import BooksList from "../components/BooksList.jsx"

function Books(){
  const { data: books, loading: booksLoading, error: booksError } = getBooks()

  return(
    <div>
      <p>Books</p>
      <BooksList books={books}/>
    </div>
  )
}

export default Books