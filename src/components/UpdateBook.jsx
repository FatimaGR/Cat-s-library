export function UpdateBook({setModalChildren}){
  return(
    <div>
      <p>Do you want to update or correct something about this book?</p>
      <button>Yes, edit</button>
      <button onClick={() => setModalChildren("book detail")}>No, cancel</button>
    </div>
  )
}