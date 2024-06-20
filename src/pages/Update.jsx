import { Link, useNavigate, useParams } from "react-router-dom";
import { getBookById, updateBook } from "../services/services.js";
import { useEffect, useState } from "react";
import { Input, TextArea } from "../components/Inputs.jsx";

function Update(){
  let params = useParams();
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

  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = () => {
    navigate("/books");
  };

  function handleSubmit(e){
    e.preventDefault();

    if (!formData.name || !formData.author || !formData.synopsis || !formData.theme) {
      setErrorMessage("Please complete all the information...");
      return;
    }

    setErrorMessage("");

    updateBook(params.id, formData)
    .then(handleClick)
    .catch(error => {
      console.log('Error updating book:', error);
      setErrorMessage("An error occurred while updating the book.");
    })
  }

  function handleChange(event){
    const {name, value} = event.target;
    setFormData({ ...formData, [name]: value});
  }

  return(
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
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
                  <label htmlFor={theme}>
                    <input
                      id={theme}
                      type="radio"
                      name="theme"
                      value={theme}
                      checked={formData.theme === theme}
                      onChange={handleChange}
                    />
                    {theme}
                  </label>
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
            <button type="submit">Update</button>
          </form>
          {errorMessage && <p>{errorMessage}</p>}
        </div>
      )}
    </div>
  )
}

export default Update