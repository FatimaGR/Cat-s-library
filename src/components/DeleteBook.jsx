function DeleteBook({setModalChildren}){
  return(
    <div>
      <p>Are you sure?</p>
      <button>Yes, delete</button>
      <button onClick={() => setModalChildren("book detail")}>No, cancel</button>
    </div>
  )
}

export default DeleteBook