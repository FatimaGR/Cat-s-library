import { useEffect, useState } from "react";
import { getBookById } from "../services/services.js"

function BookDetail({id}){
  const [book, setBook] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getBookById(id)
      .then ((book) => {
        setBook(book)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  },[]);

  return(
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>{book?.name}</p>
          <p>{book?.theme}</p>
          <p>{book?.synopsis}</p>
        </div>
      )}
    </div>
  )
}

export default BookDetail