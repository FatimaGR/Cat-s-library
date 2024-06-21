import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { Input, TextArea } from "../components/Inputs"
import { createBook } from "../services/services.js";

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

  return(
    <div>
      <p>Create</p>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            label="Name"
            placeholder="write a name"
          />
          <Input
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            label="Author"
            placeholder="write a author"
          />
          <div>
            {themes.map((theme) =>
              <Input
                id={theme}
                type="radio"
                name="theme"
                value={theme}
                onChange={handleChange}
                label={theme}
              />
            )}
          </div>
          <TextArea
            id="synopsis"
            name="synopsis"
            value={formData.synopsis}
            onChange={handleChange}
            label="Synopsis"
            placeholder="write a synopsis"
          />
        </div>
        <button type="submit">Create</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  )
}

export default Create