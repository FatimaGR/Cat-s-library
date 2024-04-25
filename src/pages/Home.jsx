import home from "../assets/home.png"
import "../styles/Home.css"

function Home(){
  return(
    <section className="home first-container">
      <h1>Welcome to</h1>
      <p className="title">Cat's library</p>
      <p className="quote">The perfect place for lovers of <br /> books and cats</p>
      <img src={home} alt="Cat's library home" />
    </section>
  )
}

export default Home