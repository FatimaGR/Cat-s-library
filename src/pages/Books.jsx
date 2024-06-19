import { getBooks } from "../services/services.js"

function Books(){
  const { data: books, loading: booksLoading, error: booksError } = getBooks()

  return(
    <div>
      <p>Books</p>
      <ul>{books?.map((book) => <li>{book.name}</li>)}</ul>
    </div>
  )
}

export default Books