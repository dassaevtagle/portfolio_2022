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
              <div className="inline-flex text-8xl">
                <span style={{color: '#18EC59'}} id="name">
                  Dassaev Tagle
                </span>
              </div>

            </h1>
            <h2 className="mt-4">
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