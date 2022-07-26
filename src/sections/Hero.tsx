import { useEffect, useRef } from "react";
import Tilt from 'react-parallax-tilt'
import anime from "animejs";
import FullPageContainer from "../components/FullPageContainer"
import useOnScreen from "../hooks/useOnScreen";
import '../assets/scss/sections/Hero.scss';

function Hero () {
  const heroRef = useRef<HTMLDivElement>(null)
  const isOnScreen = useOnScreen({
    ref: heroRef,
    triggerOnce: true
  })
  const animate = () => {
    const tl = anime.timeline()
    tl
    .add({
      targets: '.hero-greeting',
      opacity: [0, 1],
      translateX: ['-100%', '0%'],
      easing: 'easeInOutCirc',
      duration: 750,
    })

    tl
    .add({
      targets: '.hero-intro',
      opacity: [0, 1],
      translateX: ['100%', '0%'],
      easing: 'easeInOutCirc',
      duration: 750,
    }, '-=500')
  }

  useEffect(() => {
    if(heroRef.current && isOnScreen){
      animate()
    }
  }, [heroRef, isOnScreen])

  return (
    <FullPageContainer>
      <div className="hero" ref={heroRef}>
        <h2 className="hero-greeting reiju">
          Hello! I'm
          <br/>
          <Tilt>
            <span className="hero-greeting_name">
              Dassaev Tagle
            </span>
          </Tilt>
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