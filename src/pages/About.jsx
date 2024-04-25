import paws from "../assets/paws.png"
import nina from "../assets/nina.png"
import kai from "../assets/kai.png"
import lea from "../assets/lea.png"
import max from "../assets/max.png"
import yana from "../assets/yana.png"
import paw from "../assets/paw.svg"
import "../styles/About.css"

function About(){
  return(
    <section className="first-container">
      <div className="about first-container">
        <div className="third-container">
          <h1>The perfect place for lovers of books and cats</h1>
          <p>On this page, you can find book recommendations related to cats, whether they are protagonists, important characters, about their care, from authors who love cats, etc.</p>
        </div>
        <div className="information">
          <img src={paws} alt="paws" className="paws"/>
          <div className="cats-presentation">
            <p>If you know of any book that is not on our list, you are also invited to add it, feel free to share. <br />
Our little cats will accompany you during your book search. They are Nina, Kai, Lea, Max, and Yana. Start your adventure by clicking the paw!"</p>
            <ul>
              <li><img src={nina} alt="nina"/></li>
              <li><img src={kai} alt="kai"/></li>
              <li><img src={lea} alt="lea"/></li>
              <li><img src={max} alt="max"/></li>
              <li><img src={yana} alt="yana"/></li>
            </ul>
          </div>
          <a href="/books" className="paw-button"><img src={paw} alt="paw" /></a>
        </div>
      </div>
    </section>
  )
}

export default About