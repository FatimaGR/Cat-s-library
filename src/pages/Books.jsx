import { getBooks } from "../services/services.js"
import BooksList from "../components/BooksList.jsx"
import { useEffect, useState } from "react";
import Search from "../components/Search.jsx";
import Sort from "../components/Sort.jsx";
import Filter from "../components/Filter.jsx";
import { Link } from "react-router-dom";
import create from "../assets/create.png"
import "../styles/Books.css"
import arrow from "../assets/bx-chevron-down.svg"

function Books(){
  const [initialBooks, setInitialBooks] = useState([])
  const [filteredBooks, setFilteredBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState([])
  const [sort, setSort] = useState("")

  const [filterToggle, setFilterToggle] = useState(false)
  const [sortToggle, setSortToggle] = useState(false)

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
    if (name != "" & filter.length > 0){
      const nameUpper = name.toUpperCase()
      const booksFiltered = filteredBooks.filter((book) => book.name.toUpperCase().includes(nameUpper))
      setFilteredBooks(booksFiltered)
    } else if (name != "" & filter.length == 0){
      const nameUpper = name.toUpperCase()
      const booksFiltered = initialBooks.filter((book) => book.name.toUpperCase().includes(nameUpper))
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

  function handleFilterToggle(){
    setFilterToggle(!filterToggle)
  }
  function handleSortToggle(){
    setSortToggle(!sortToggle)
  }

  return(
    <section className="books-page first-container">
      <div className="books first-container">
        <div className="recommend-container">
          <div className="recommend-content">
            <p className="subtitle">Recommend books here!</p>
            <p>Do you have a book to recommend? Feel free to add it by clicking below.</p>
            <Link to={"/create"} className="create-button">Create</Link>
          </div>
          <img src={create} alt="create" className="create-image"/>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="books-container">
            <div className="books-options">
              <div className="filter-container">
                <button onClick={handleSortToggle}>Sort <img src={arrow} alt="" /></button>
                <Sort onSortChange={handleSort} classname={sortToggle ? "sort-list" : "none"}/>
              </div>
              <Search onSubmit={handleSearchSubmit}/>
              <div className="filter-container">
                <button onClick={handleFilterToggle}>Filter <img src={arrow} alt="" /></button>
                <Filter filter={filter} onFilterChange={handleFilter} classname={filterToggle ? "filter-list" : "none"}/>
              </div>
            </div>
            <BooksList books={filteredBooks} />
          </div>
        )}
      </div>
    </section>
  )
}

export default Books