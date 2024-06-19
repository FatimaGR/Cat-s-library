import CatProtagonist from "../assets/cover-cat-protagonist.png"
import FelineFiction from "../assets/cover-feline-fiction.png"
import Other from "../assets/cover-other.png"

function bookImageSrc(theme){
  switch (theme) {
    case 'Cat Protagonist':
      return CatProtagonist
    case 'Feline Fiction':
      return FelineFiction
    default:
      return Other
  }
}

function BookCard({book}){
  return(
    <div>
      <p>{book?.id}</p>
      <p>{book?.name}</p>
      <p>{book?.theme}</p>
      <p>{book?.synopsis}</p>
      <img style={{ width: '200px' }} src={bookImageSrc(book?.theme)} alt={book?.name} />
    </div>
  )
}

export default BookCard