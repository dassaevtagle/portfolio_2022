import FullPageContainer from "../components/FullPageContainer"
import Background from '../assets/svg/background.svg'
import './Hero.scss'

function Hero () {
  return (
    <FullPageContainer>
      <div className="hero" style={{backgroundImage: `url(${Background})`}}>
        <h2 className="hero-greeting reiju">
          Hello! I'm
          <br/>
          <span className="hero-greeting_name">
            Dassaev Tagle
          </span>
        </h2>
        <h3 className="hero-intro">
          Software developer by day, pianist by night.
          <br/>
          I enjoy working on the front-end. Lifetime learner.
        </h3>
      </div>
    </FullPageContainer>
  )
}

export default Hero;