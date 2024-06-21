import { getBooks } from "../services/services.js"
import BooksList from "../components/BooksList.jsx"
import { useEffect, useState } from "react";
import Search from "../components/Search.jsx";
import Sort from "../components/Sort.jsx";
import Filter from "../components/Filter.jsx";

function Books(){
  const [initialBooks, setInitialBooks] = useState([])
  const [filteredBooks, setFilteredBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState([])
  const [sort, setSort] = useState("")

  useEffect(() => {
    setLoading(true)
    getBooks()
      .then((books) => {
        setFilteredBooks(books)
        setInitialBooks(books)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  },[]);

  useEffect(() => {
    let updatedBooks = [...initialBooks]

    if (filter.length > 0){
      updatedBooks = updatedBooks.filter(book => filter.includes(book.theme))
    }

    if (sort){
      updatedBooks.sort((a, b) => a[sort].localeCompare(b[sort]))
    }

    setFilteredBooks(updatedBooks)
  }, [filter, sort, initialBooks])

  function handleSearchSubmit(name){
    if (name != ""){
      const nameUpper = name.toUpperCase()
      const booksFiltered = filteredBooks.filter((book) => book.name.toUpperCase().includes(nameUpper))
      setFilteredBooks(booksFiltered)
    } else {
      setFilteredBooks(initialBooks)
    }
  }

  function handleFilter(newFilter){
    setFilter(newFilter)
  }

  function handleSort(newSort){
    setSort(newSort)
  }

  return(
    <div>
      <p>Books</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div>
            <Sort onSortChange={handleSort}/>
            <Search onSubmit={handleSearchSubmit}/>
            <Filter filter={filter} onFilterChange={handleFilter}/>
          </div>
          <BooksList books={filteredBooks} />
        </div>
      )}
    </div>
  )
}

export default Books