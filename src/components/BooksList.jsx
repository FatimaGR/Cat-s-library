import { useState } from "react";
import BookCard from "./BookCard"

function pagination(data, page, limit) {
  const startId = (page - 1) * limit;
  const endId = page * limit;
  const paginatedData = data?.slice(startId, endId);
  return paginatedData;
}

function BooksList({books}){
  const [page, setPage] = useState(1);
  const limit = 10;
  const paginatedBooks = pagination(books, page, limit);

  return(
    <div>
      <ul>{paginatedBooks?.map((book) => <BookCard key={book.id} book={book}/>)}</ul>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
      <button disabled={paginatedBooks?.length < limit} onClick={() => setPage(page + 1)}>Next</button>
    </div>
  )
}

export default BooksList