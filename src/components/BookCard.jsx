import CatProtagonist from "../assets/cover-cat-protagonist.png"
import FelineFiction from "../assets/cover-feline-fiction.png"
import CatLoverAuthor from "../assets/cover-author.png"
import CatCare from "../assets/cover-cat-care.png"
import Other from "../assets/cover-other.png"
import { useState } from "react"
import BookDetail from "./BookDetail"
import Modal from "./Modal"
import DeleteBook from "./DeleteBook"
import { UpdateBook } from "./UpdateBook"

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

function modalActualization(children, book, setChildren){
  switch (children) {
    case "delete":
      return <DeleteBook setModalChildren={setChildren} id={book?.id}/>
    case "update":
      return <UpdateBook setModalChildren={setChildren} id={book?.id}/>
    default:
      return <BookDetail key={book?.id} id={book?.id}/>
  }
}

function BookCard({book}){
  const [open, setOpen] = useState(false)
  const [modalChildren, setModalChildren] = useState("book detail")

  return(
    <div>
      <img style={{ width: '200px' }} src={bookImageSrc(book?.theme)} alt={book?.name} />
      <br />
      <button onClick={() => setOpen(true)}>{book?.name}</button>
      <Modal open={open} close={() => setOpen(false)} setChildren={setModalChildren}>
        {modalActualization(modalChildren, book, setModalChildren)}
      </Modal>
    </div>
  )
}

export default BookCard