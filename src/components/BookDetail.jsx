import { useEffect, useState } from "react";
import { getBookById } from "../services/services.js"
import CatProtagonist from "../assets/cover-cat-protagonist.png"
import FelineFiction from "../assets/cover-feline-fiction.png"
import CatLoverAuthor from "../assets/cover-author.png"
import CatCare from "../assets/cover-cat-care.png"
import Other from "../assets/cover-other.png"

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

  function bookImageSrc(theme){
    switch (theme) {
      case "Cat protagonist":
        return CatProtagonist
      case "Feline fiction":
        return FelineFiction
      case "Cat care":
        return CatCare
      case "Cat lover author":
        return CatLoverAuthor
      default:
        return Other
    }
  }

  return(
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="book-detail">
          <img src={bookImageSrc(book?.theme)} alt={book?.name} />
          <div className="book-description">
            <h1>{book?.name}</h1>
            <p>{book?.author}</p>
            <p>{book?.synopsis}</p>
            <p className="book-theme">{book?.theme}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default BookDetail