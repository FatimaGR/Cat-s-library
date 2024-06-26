import CatProtagonist from "../assets/cover-cat-protagonist.png"
import FelineFiction from "../assets/cover-feline-fiction.png"
import CatLoverAuthor from "../assets/cover-author.png"
import CatCare from "../assets/cover-cat-care.png"
import Other from "../assets/cover-other.png"
import "../styles/Create.css"

function ThemesList(){
  const themes = [
    {name: "Cat protagonist", image: CatProtagonist, description: "Books where cats play a central role in the storyline."},
    {name: "Feline fiction", image: FelineFiction, description: "Books where cats are characters or integral elements of the story."}, 
    {name: "Cat care", image: CatCare, description: "Books offering guidance and tips for care of cats."}, 
    {name: "Cat lover author", image: CatLoverAuthor, description: "Books written by authors who are passionate about cats."}, 
    {name: "Other", image: Other, description: "Books that do not fit into the specific categories above."}
  ]

  return(
    <div className="themes-container">
      {themes.map(theme => (
        <div className="theme-card">
          <img src={theme.image} alt="" />
          <div className="theme-description">
            <p>{theme.name}</p>
            <p>{theme.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ThemesList