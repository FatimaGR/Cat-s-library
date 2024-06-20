import { getBookById } from "../services/services.js"

function BookDetail({id}){
  const { data: book, loading: bookLoading, error: bookError } = getBookById(id)
  return(
    <div>
      <p>{book?.name}</p>
      <p>{book?.theme}</p>
      <p>{book?.synopsis}</p>
    </div>
  )
}

export default BookDetail