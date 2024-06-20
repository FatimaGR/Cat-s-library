function Modal({children, open, close, setChildren}){
  if(!open) return null

  return(
    <div>
      {children}
      <button onClick={() => setChildren("update")}>update</button>
      <button onClick={() => setChildren("delete")}>delete</button>
      <button onClick={close}>close</button>
    </div>
  )
}

export default Modal