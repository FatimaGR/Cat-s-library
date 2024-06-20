import { fetchData } from "./fetchData.js"

export function getBooks(){
  return fetchData("/books")
}

export function getBookById(id){
  return fetchData(`/books/${id}`)
}

export function createBook(bookData){
  return fetchData("/books", {method: 'POST', body: bookData})
}

export function updateBook(id, newData){
  return fetchData(`/books/${id}`, {method: 'PUT', body: newData})
}

export function deleteBook(id){
  return fetchData(`/books/${id}`, {method: 'DELETE'})
}
