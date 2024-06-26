import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { Input, TextArea } from "../components/Inputs"
import { createBook } from "../services/services.js";
import ThemesList from "../components/ThemesList.jsx";
import "../styles/Create.css"
import arrow from "../assets/bx-chevron-down-purple.svg"

function Create(){
  const navigate = useNavigate()
  const themes = ["Cat protagonist","Cat care", "Feline fiction", "Cat lover author", "Other"]

  const [formData, setFormData] = useState({
    name: "",
    author: "",
    synopsis: "",
    theme: "",
  })

  const [errorMessage, setErrorMessage] = useState("");
  const [themeToggle, setThemeToggle] = useState(false)

  const handleClick = () => {
    navigate("/books")
  };

  function handleSubmit(e){
    e.preventDefault()

    if (!formData.name || !formData.author || !formData.synopsis || !formData.theme) {
      setErrorMessage("Please complete all the information...");
      return;
    }

    setErrorMessage("")

    createBook(formData)
    .then(handleClick)
    .catch(error => {
      console.log('Error creating book:', error);
      setErrorMessage("An error occurred while creating the book.");
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
    <div className="create second-container">
      <ThemesList/>
      <form onSubmit={handleSubmit}>
        <h1>Do you have a <br /> recommendation?</h1>
        <p>Fill in the details of the book you want to recommend. <br />
        About the themes, you can see what each one refers to in the list.</p>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          label="Name"
          placeholder="Write the name of the book or series"
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
            placeholder="Write the name of the author"
            classInput="text-input"
            classDiv="input-container"
          />
          <div className="theme-input-container">
            <label>Theme</label>
            <div className="select-button" onClick={handleThemeToggle}>Select a theme <img src={arrow}/></div>
            <div className={themeToggle ? "theme-selection" : "none"}>
              {themes.map((theme) =>
                <Input
                  id={theme}
                  type="radio"
                  name="theme"
                  value={theme}
                  onChange={handleChange}
                  label={theme}
                  classDiv="select-input"
                />
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
          placeholder="Write what the book is about."
          classDiv="input-container"
        />
        <button type="submit">Create</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  )
}

export default Create