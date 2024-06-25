import "../styles/Modal.css"
import updateBt from "../assets/bx-edit-alt.svg"
import trashBt from "../assets/bx-trash.svg"
import closeBt from "../assets/paw.svg"

function Modal({children, open, close, setChildren}){
  if(!open) return null

  return(
    <div className="modal-background">
      <div className="modal-content">
        <div className="modal-buttons">
          <button onClick={() => setChildren("update")} className="modal-button"><img src={updateBt}/></button>
          <button onClick={() => setChildren("delete")} className="modal-button"><img src={trashBt}/></button>
          <button onClick={close} className="modal-button"><img src={closeBt}/></button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal