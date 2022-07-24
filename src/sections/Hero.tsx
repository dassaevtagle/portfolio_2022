import FullPageContainer from "../components/FullPageContainer";
import Memoji from '../assets/img/memoji_rodolfo.png';
import "./Hero.scss"

function Hero() {
  return (
    <FullPageContainer>
      <div className="hero">
        <div className="hero-grid">
          <div className="hero-grid_image">
            <img src={Memoji} alt="Emoji of my face" />
          </div>
          <div className="hero-grid_title">
            <h1 className="text-6xl reiju">
              Hey there! I'm
              <br/>
              <span className="hero-grid_title-highlight">
                Dassaev Tagle
              </span>
            </h1>
            <h2 className="mt-2">
              Software developer by day, pianist by night.
              <br/>
              I enjoy working on the front-end. Lifetime learner.
            </h2>
          </div>
        </div>
      </div>
    </FullPageContainer>
  );
}

export default Hero;