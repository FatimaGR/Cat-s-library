import { useFetch } from "./useFetch.js"

export function getBooks(){
  return useFetch("/books")
}

export function getBookById(id){
  return useFetch(`/books/${id}`)
}

export function createBook(bookData){
  return useFetch("/books", {method: 'POST', body: bookData})
}

export function updateBook(id, newData){
  return useFetch(`/books/${id}`, {method: 'PUT', body: newData})
}

export function deleteBook(id){
  return useFetch(`/books/${id}`, {method: 'DELETE'})
}
