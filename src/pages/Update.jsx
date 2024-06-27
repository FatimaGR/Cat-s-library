import { useNavigate, useParams } from "react-router-dom"
import { getBookById, updateBook } from "../services/services.js"
import { useEffect, useState } from "react"
import { Input, TextArea } from "../components/Inputs.jsx"
import arrow from "../assets/bx-chevron-down-purple.svg"

function Update(){
  let params = useParams()
  const navigate = useNavigate()
  const themes = ["Cat protagonist","Cat care", "Feline fiction", "Cat lover author", "Other"]
  const [loading, setLoading] = useState(true)

  const [formData, setFormData] = useState({
    name: "",
    author: "",
    synopsis: "",
    theme: "",
  })

  useEffect(() => {
    setLoading(true)
    getBookById(params.id)
      .then ((book) => {
        setFormData(book)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  },[]);

  const [errorMessage, setErrorMessage] = useState("")
  const [themeToggle, setThemeToggle] = useState(false)

  const handleClick = () => {
    navigate("/books")
  };

  function handleSubmit(e){
    e.preventDefault()

    if (!formData.name || !formData.author || !formData.synopsis || !formData.theme) {
      setErrorMessage("Please complete all the information...")
      return;
    }

    setErrorMessage("")

    updateBook(params.id, formData)
    .then(handleClick)
    .catch(error => {
      console.log('Error updating book:', error);
      setErrorMessage("An error occurred while updating the book.")
    })
  }

  function handleChange(event){
    const {name, value} = event.target
    setFormData({ ...formData, [name]: value})
  }

  function handleThemeToggle(){
    setThemeToggle(!themeToggle)
  }


  return(
    <div className="first-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="update">
          <h1>Edit the book</h1>
          <p>Thank you for updating or correcting the information <br /> of this book!</p>
          <form onSubmit={handleSubmit} className="form-container">
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              label="Name"
              placeholder="write a name"
              classInput="text-input"
              classDiv="input-container"
            />
            <div className="two-options">
              <Input
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                label="Author"
                placeholder="write a author"
                classInput="text-input"
                classDiv="input-container"
              />
              <div className="theme-input-container">
                <label>Theme</label>
                <div className="selected-button" onClick={handleThemeToggle}>{formData.theme} <img src={arrow}/></div>
                <div className={themeToggle ? "theme-selection" : "none"}>
                  {themes.map((theme) =>
                    <div className="select-input">
                      <label htmlFor={theme}>{theme}</label>
                      <input
                        id={theme}
                        type="radio"
                        name="theme"
                        value={theme}
                        checked={formData.theme === theme}
                        onChange={handleChange}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <TextArea
              id="synopsis"
              name="synopsis"
              value={formData.synopsis}
              onChange={handleChange}
              label="Synopsis"
              placeholder="write a synopsis"
              classDiv="input-container"
            />
            <button type="submit">Update</button>
          {errorMessage && <p className="error">{errorMessage}</p>}
          </form>
        </div>
      )}
    </div>
  )
}

export default Update