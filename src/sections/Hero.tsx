import FullPageContainer from "../components/FullPageContainer"
import '../assets/scss/sections/Hero.scss';

function Hero () {
  return (
    <FullPageContainer>
      <div className="hero">
        <h2 className="hero-greeting reiju">
          Hello! I'm
          <br/>
          <span className="hero-greeting_name">
            Dassaev Tagle
          </span>
        </h2>
        <h3 className="hero-intro">
          Software <span>developer </span>
          by day, <span> pianist </span>by night.
          <br/>
          I enjoy working on the front-end. Lifetime learner.
        </h3>
      </div>
    </FullPageContainer>
  )
}

export default Hero;